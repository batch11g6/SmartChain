from .. import db_connection
import psycopg2


def insert_package_hash_details(conn, hash_number, package):
    try:
        print("product Addition")
        print(hash_number, package)
        SQL_QUERY = 'INSERT INTO hash_batch (hash, batch) VALUES (%s, %s)'
        value = (hash_number, package)
        cursor = conn.cursor()
        cursor.execute(SQL_QUERY, value)
        conn.commit()
    except (Exception, psycopg2.Error) as error:
        print(error)
