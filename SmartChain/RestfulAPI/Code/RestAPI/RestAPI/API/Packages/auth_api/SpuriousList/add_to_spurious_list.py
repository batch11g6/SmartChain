import argparse
from .. import db_connection


def add_to_black_list(prod_name, location_lat, location_long,additional_details,conn):
    #conn = db_connection.get_connection()
    cursor = conn.cursor()
    SQL_QUERY = "INSERT INTO spurious_list ( prod_name , location_lat, location_long , additional_details ) VALUES (%s, %s, %s, %s)"
    value = (prod_name, location_lat, location_long,additional_details)
    cursor.execute(SQL_QUERY, value)
    conn.commit()

if __name__=='__main__':
    conn=db_connection.get_connection()
    add_to_black_list('crocin',12.88,77.34,'jdhdjkhd',conn)