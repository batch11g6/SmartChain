import json
import mysql.connector
from mysql.connector import Error


CONFIG_FILE_PATH = "./dbconfig.json"


def get_connection():
    with open(CONFIG_FILE_PATH) as f:
        data = dict(json.load(f))
        print(data)
    try:
        conn = mysql.connector.connect(host=data['host'],
                                       database=data['database'],
                                       user=data['user'],
                                       password=data['password'])
        if conn.is_connected():
            print('Connected to MySQL database')
 
    except Error as e:
        print(e)

    return conn


if __name__ =='__main__':
    get_connection()