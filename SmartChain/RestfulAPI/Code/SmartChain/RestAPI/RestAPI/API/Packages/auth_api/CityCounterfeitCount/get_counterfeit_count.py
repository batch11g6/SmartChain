from .. import db_connection
import psycopg2

def get_count_of_city(lati,longi,conn):
    try:
        city_count=[]
        cursor=conn.cursor()
        SQL_QUERY="SELECT additional_details,count(additional_details) FROM spurious_list WHERE (location_lat -%s) < 0.09 and (location_long -%s)<0.09  GROUP BY additional_details"
        values=(lati,longi)
        cursor.execute(SQL_QUERY,values)
        result=cursor.fetchall()
        print(result)
        for row in result:
            city_count.append({
                'city':row[0],
                'count':row[1]
            })
    except(Exception,psycopg2.Error) as error:
        city_count.append({'city':'---','count':0})
        print(error)

    return city_count