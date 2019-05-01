from .. import db_connection
import psycopg2

def get_count_by_name(city_name,conn):
    try:
        cursor=conn.cursor()
        your_city_count=[]
        SQL_QUERY='SELECT count(additional_details) FROM spurious_list WHERE additional_details =%s GROUP BY additional_details'
        value=(city_name,)
        cursor.execute(SQL_QUERY,value)
        result=cursor.fetchall()
        print(result)

        if len(result)>0:
            for row in result:
                your_city_count.append({
                    'mycitycount':row[0]
                })
        else:
            your_city_count.append({
                'mycitycount':0
            })

    except (Exception,psycopg2.Error) as error:
        your_city_count.append({
            'mycitycount':0
        })
        print(error)

    return your_city_count