import argparse
try:
    from . import DB_conn
except:
    import DB_conn
from mysql.connector import Error


def check_auth_pool(number_check):
    
    isPresent=False
    details=''
    try:
        conn = DB_conn.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM authenticated_pool WHERE random_number="+str(number_check))
        row = cursor.fetchone()

        while row is not None:
            print(str(row[0]))
            if str(row[0])==number_check:
                print(str(row[1]))
                details=str(row[1])
                isPresent=True
            row = cursor.fetchone()
 
    except Error as e:
        print(e)
    finally:
        cursor.close()
        conn.close()
        
    return isPresent,details
 


if __name__=='__main__':
    print(check_auth_pool('1'))
