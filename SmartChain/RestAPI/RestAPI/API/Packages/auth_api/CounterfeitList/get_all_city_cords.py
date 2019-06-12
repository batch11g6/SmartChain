from .. import db_connection
import psycopg2

def get_all_city_cords(conn):
    location_data=[]
    try:
        cursor=conn.cursor()
        SQL_QUERY="SELECT ROUND(location_lat::numeric,1) as location_lat, ROUND(location_long::numeric ,1) as location_long, additional_details, count(additional_details) FROM spurious_list GROUP BY additional_details, ROUND(location_lat::numeric,1), ROUND(location_long::numeric ,1)"
        cursor.execute(SQL_QUERY,)
        result = cursor.fetchall()

        for row in result:
            location_data.append({ 
                'lat_long': [row[0], row[1]],
                'city':row[2],
                'count':row[3]
                })

    except (Exception, psycopg2.Error) as error:
        print(error)
        location_data.append({ 
                'lat': 'none',
                'long': 'none',
                'city':'none',
                'count':'none',
                })
    return location_data