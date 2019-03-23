import argparse
try:
    from . import db_connection
except:
    import db_connection
import psycopg2


def get_spurious(conn):
    spurious_list=[]
    try:
        #conn = db_connection.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM spurious_list")
        row = cursor.fetchone()
        while row is not None:
            prod_name,location_lat,location_long,additional_details=row[0],row[1],row[2],row[3]
            spurious_list.append([prod_name,location_lat,location_long,additional_details])
            row = cursor.fetchone()
        print(spurious_list[0][0])

    except (Exception ,psycopg2.Error) as e:
        print(e)
        
    return spurious_list

if __name__=='__main__':

    conn=db_connection.get_connection()
    print(str(get_spurious(conn)))