import argparse
try:
    from . import db_connection
except:
    import db_connection
import psycopg2


def check_auth_pool(number_check):
    
    isPresent=False
    details=''
    try:
        conn = db_connection.get_connection()
        cursor = conn.cursor()
        SQL_QUERY="SELECT * FROM authenticated_pool WHERE random_number=%s"
        value=(str(number_check),)
        cursor.execute(SQL_QUERY,value)
        result = cursor.fetchall()
        print(result)
        for row in result:
            if str(row[0])==str(number_check):
                isPresent=True
 
    except (Exception,psycopg2.Error) as e:
        print(e)
    finally:
        cursor.close()
        conn.close()
    print(isPresent)
    return isPresent,details
 


if __name__=='__main__':
    print(check_auth_pool('1'))
