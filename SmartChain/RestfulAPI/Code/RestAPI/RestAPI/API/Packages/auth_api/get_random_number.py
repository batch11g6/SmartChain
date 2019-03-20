try:
    from . import db_connection
except:
    import db_connection
import psycopg2



def get_random_number(hash_value):
    try:
        conn=db_connection.get_connection()
        cursor=conn.cursor()
        SQL_QUERY="SELECT random_number from hash_randnumber WHERE hash=%s"
        value=(hash_value,)
        cursor.execute(SQL_QUERY,value)
        result=cursor.fetchone()
        return result[0]

    except (Exception,psycopg2.Error) as error:
        print(error)
        return error

