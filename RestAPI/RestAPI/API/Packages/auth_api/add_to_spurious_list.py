import argparse
try:
    from . import DB_conn
except:
    import DB_conn


def add_to_black_list(prod_name,location,additional_details):
    conn = DB_conn.get_connection()
    mycursor = conn.cursor()
    sql = "INSERT INTO spurious_list ( prod_name , location , additional_details ) VALUES (%s, %s, %s)"
    val = (prod_name,location,additional_details)
    mycursor.execute(sql, val)
    conn.commit()
    conn.close()

if __name__=='__main__':
    add_to_black_list('crocin','Bengaluru India','jdhdjkhd')