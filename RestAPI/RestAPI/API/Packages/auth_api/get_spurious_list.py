import argparse
try:
    from . import DB_conn
except:
    import DB_conn

def get_spurious():
    spurious_list=[]
    try:
        conn = DB_conn.get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM spurious_list")
        row = cursor.fetchone()
        while row is not None:
            print(str(row[0]))
            prod_name,location,additional_details=row[0],row[1],row[2]
            spurious_list.append([prod_name,location,additional_details])
            row = cursor.fetchone()
        print(spurious_list[0][0])
    except Error as e:
        print(e)
    finally:
        cursor.close()
        conn.close()
        
    return spurious_list

if __name__=='__main__':
    print(str(get_spurious()))