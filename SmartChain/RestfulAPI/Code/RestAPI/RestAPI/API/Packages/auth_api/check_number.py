
import argparse

try:
    from . import db_connection
except:
    import db_connection
import psycopg2

# returns 'bool' True if number is pressent in database if not returns False 
def is_number_present(number_check,conn):
    isPresent=False
    try:
        #conn = db_connection.get_connection()
        cursor = conn.cursor()
        print(number_check)
        SQL_QUERY="SELECT * FROM random_number_pool WHERE random_number=%s"
        cursor.execute(SQL_QUERY,(str(number_check),))
        result = cursor.fetchall()
        print(result)

        for row in result:
            if str(row[0])==str(number_check):
                isPresent=True
 
    except(Exception,psycopg2.Error) as error:
        print(error)

    print('Random number isPresent ',isPresent)
    return isPresent
 

 
if __name__ == '__main__':

    parser = argparse.ArgumentParser(description="Insert check data  DB")
    parser.add_argument('-n', '--number', type=str, required=True ,help="Enter a number and chech if it is present in number pool")
    args = parser.parse_args()

    number = args.number
    # 535689400738783
    