try:
    from . import DB_conn
except:
    import DB_conn
    
import argparse


def add_to_pool(number,detail):

    conn = DB_conn.get_connection()
    mycursor = conn.cursor()
    sql = "INSERT INTO authenticated_pool ( random_number , details ) VALUES (%s, %s)"
    val = (number,detail)
    mycursor.execute(sql, val)
    conn.commit()
    conn.close()


if __name__=='__main__':
    add_to_pool('1','ok')
