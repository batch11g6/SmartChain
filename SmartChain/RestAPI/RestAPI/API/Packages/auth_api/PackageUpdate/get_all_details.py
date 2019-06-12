from .. import db_connection
import psycopg2


def get_all_details(conn, pkg_id):
    try:
        product_update = []
        SQL_QUERY = "SELECT lcation_long, location_lat, time_stamp from  productupdate WHERE pkg_id=%s"
        value = (pkg_id, )
        cursor = conn.cursor()
        cursor.execute(SQL_QUERY, value)
        result = cursor.fetchall()

        if len(result) > 0:
            for row in result:
                product_update.append({
                    'long': row[0],
                    'lat': row[1],
                    'timestamp': row[2]
                })
        else:
            product_update.append({
                'long': 0.0,
                'lat': 0.0,
                'timestamp': 0000.0
            })
    except (Exception, psycopg2.Error) as error:
        print(error)
        product_update.append({
            'long': 0.0,
            'lat': 0.0,
            'timestamp': 0000.0
        })
    return product_update
