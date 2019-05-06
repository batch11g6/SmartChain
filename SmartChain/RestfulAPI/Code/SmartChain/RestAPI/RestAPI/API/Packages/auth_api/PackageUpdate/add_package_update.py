from .. import db_connection
import psycopg2


def insert_product_tracking_info(conn, pkg_id, lcation_long, location_lat, time_stamp):
    status=''
    try:
        SQL_QUERY = "INSERT INTO productupdate (pkg_id, lcation_long, location_lat, time_stamp) VALUES (%s, %s, %s, %s)"
        value=(pkg_id, lcation_long, location_lat, time_stamp)
        cursor=conn.cursor()
        cursor.execute(SQL_QUERY, value)
        conn.commit()
        status="success"
    except (Exception, psycopg2.Error) as error:
        print(error)
        status="failed"
    return status