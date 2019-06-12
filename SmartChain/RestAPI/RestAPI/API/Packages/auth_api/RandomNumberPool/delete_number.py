import argparse
from .. import db_connection

# Delets a number from database and returns the count of rows removed

def delete_number(number,conn):

    conn =db_connection.get_connection()
    cursor = conn.cursor()
    SQL_QUERY = "DELETE FROM random_number_pool WHERE random_number =%s"
    value=(number,)
    cursor.execute(SQL_QUERY,value)
    conn.commit()
    print(cursor.rowcount, "record(s) deleted")
    return cursor.rowcount
 
if __name__ == '__main__':

    parser = argparse.ArgumentParser(description="Insert delete DB")
    parser.add_argument('-n', '--number', type=str, required=True ,help="Enter a number and chech if it is present in number pool if yes then the number will be removed")
    args = parser.parse_args()

    number = args.number
    # 535689400738783
    