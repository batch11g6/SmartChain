
import argparse
from mysql.connector import Error
try:
    from . import DB_conn
except:
    import DB_conn

# returns 'bool' True if number is pressent in database if not returns False 
def is_number_present(number_check):
    isPresent=False
    try:
        conn = DB_conn.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM random_number_pool WHERE random_number="+str(number_check))
        row = cursor.fetchone()

        while row is not None:
            print(str(row[0]))
            if str(row[0])==number_check:
                isPresent=True
            row = cursor.fetchone()
 
    except:
        print('error')
    finally:
        cursor.close()
        conn.close()
        
    return isPresent
 

 
if __name__ == '__main__':

    parser = argparse.ArgumentParser(description="Insert check data  DB")
    parser.add_argument('-n', '--number', type=str, required=True ,help="Enter a number and chech if it is present in number pool")
    args = parser.parse_args()

    number = args.number
    # 535689400738783
    print(is_number_present(number))