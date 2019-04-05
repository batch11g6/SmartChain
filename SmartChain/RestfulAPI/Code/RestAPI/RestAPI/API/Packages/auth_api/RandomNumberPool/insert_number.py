import argparse

from .. import db_connection
from ..RandomNumberPool import check_number


import psycopg2


def insert_number(number ,conn):
    query = "INSERT INTO random_number_pool (random_number) VALUES("+str(number)+")"
 
    try:
        #conn=db_connection.get_connection()
        cursor = conn.cursor()
        if not check_number.is_number_present(number,conn):
            print("Safe insert")
            cursor.execute(query)
        else:
            print('Already in DB')
        conn.commit()
    except (Exception,psycopg2.Error) as error:
        print(error)

 
if __name__ == '__main__':
    
    parser = argparse.ArgumentParser(description="Insert into DB")
    parser.add_argument('-n', '--number', type=str, required=True ,help="Random number")
    args = parser.parse_args()
    number = args.number
    conn=db_connection.get_connection()
    insert_number(number,conn)