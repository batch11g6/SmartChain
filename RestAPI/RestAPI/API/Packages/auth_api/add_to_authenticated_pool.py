try:
    from . import db_connection
except:
    import db_connection
    
import argparse


def add_to_pool(number,detail):

    conn = db_connection.get_connection()
    mycursor = conn.cursor()
    SQL_QUERY="INSERT INTO authenticated_pool ( random_number , details ) VALUES (%s, %s)"
    val = (number,detail)
    mycursor.execute(SQL_QUERY, val)
    conn.commit()
    conn.close()


if __name__=='__main__':
    add_to_pool('1','ok')
