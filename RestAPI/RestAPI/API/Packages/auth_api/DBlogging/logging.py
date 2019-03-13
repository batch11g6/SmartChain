import datetime
import time

def write_into_db(log_data):
    fileob=open('dblogs.log','a+')
    fileob.write(log_data+'\n')
    fileob.close()

def clear_file_content():
    ts = time.time()
    st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
    print (st)
    fileob=open('dblogs.log','w+')
    fileob.write(st+'\n')
    fileob.write('\n')
    fileob.close()

if __name__=='__main__':
    clear_file_content()
    write_into_db('hello')
