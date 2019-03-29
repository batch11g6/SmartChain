from .. import db_connection
import psycopg2


def get_count(conn):
    try:
        city_count=[]
        cursor=conn.cursor()
        SQL_QUERY="SELECT additional_details , count(additional_details) FROM spurious_list GROUP BY additional_details"
        cursor.execute(SQL_QUERY,)
        result = cursor.fetchall()

        for row in result:
            city_count.append({ 
                'city':row[0],
                'count':row[1]
                })

    except(Exception, psycopg2.Error) as error:
        city_count.append(('--',0))
        print(error)

    return city_count