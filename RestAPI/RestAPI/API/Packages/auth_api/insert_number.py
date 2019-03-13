import argparse
try:
    from . import DB_conn
    from . import check_number
except:
    import DB_conn
    import check_number

from mysql.connector import Error


def insert_number(number):
    query = "INSERT INTO random_number_pool (random_number) VALUES("+number+")"
 
    try:
        conn=DB_conn.get_connection()
        cursor = conn.cursor()
        if not check_number.is_number_present(number):
            print("Safe insert")
            cursor.execute(query)
        else:
            print('Already in DB')
        conn.commit()
    except Error as error:
        print(error)
 
    finally:
        cursor.close()
        conn.close()
 
if __name__ == '__main__':
    
    parser = argparse.ArgumentParser(description="Insert into DB")
    parser.add_argument('-n', '--number', type=str, required=True ,help="Random number")
    args = parser.parse_args()
    number = args.number
    insert_number(number)