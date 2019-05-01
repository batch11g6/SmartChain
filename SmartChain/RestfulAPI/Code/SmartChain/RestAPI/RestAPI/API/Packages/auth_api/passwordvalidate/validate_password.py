from .. import db_connection
import psycopg2
from cryptography.fernet import Fernet
from .... import default_constant_values

def validate_password(conn, name, password):
    try:
        SQL_QUERY="SELECT password FROM manufacturer_creds WHERE name=%s"
        values=(name,)
        cursor=conn.cursor()
        cursor.execute(SQL_QUERY,values)
        result = cursor.fetchall()
        password_hash=result[0][0]
        status=password_compare(name,password,password_hash)
    except (Exception , psycopg2.Error) as error:
        print(error)
        status=False
    return status


def password_compare(name,password,password_hash):
    KEY=default_constant_values.FERNET_KEY
    f = Fernet(KEY.encode())
    token = f.encrypt(password.encode())
    if f.decrypt(token).decode()==f.decrypt(password_hash.encode()).decode():
        return True
    else:
        return False