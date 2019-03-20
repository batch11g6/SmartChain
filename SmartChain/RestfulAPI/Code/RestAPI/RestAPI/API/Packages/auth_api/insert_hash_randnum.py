try:
    from . import db_connection
except:
    import db_connection

import psycopg2


def insert_random_num(hash_value,random_number):
    try:
        conn=db_connection.get_connection()
        cursor=conn.cursor()
        SQL_QUERY = "INSERT INTO hash_randnumber ( hash,random_number) VALUES(%s,%s)"
        value=(hash_value,random_number)
        cursor.execute(SQL_QUERY,value)
        conn.commit()
        print('hash rand OK')
    except(Exception,psycopg2.Error)as err:
        print(err)
        raise err
    finally:
        conn.close()
