from bigchaindb_driver.crypto import generate_keypair
import json
import argparse
import requests
try:
    from . import big_chain_conn
except:
    import big_chain_conn

def keyword_search_db(keyword):
    bdb=big_chain_conn.get_connection()
    return json.dumps(bdb.assets.get(search=keyword),indent=2)

def get_from_db(transaction_id):
    bdb=big_chain_conn.get_connection()
    retrived_data = bdb.transactions.retrieve(transaction_id)
    return retrived_data

def get_from_rest(transaction_id,conn):
    host=big_chain_conn.get_host_name()
    url=host+'/api/v1/transactions/'+transaction_id
    res=requests.get(url)
    return res.json()

   # 80178ae696d5a324de29c965f4705dc46022e6dff17894391c2da1c1ac477826
if __name__=='__main__':
    tx_id=''
    keyword=''
    parser=argparse.ArgumentParser(description="Get Data from DB")
    parser.add_argument('-i', '--id', type=str, required=False ,help="Transaction ID")
    args = parser.parse_args()
    tx_id=args.id
    
    #retrived_data=get_from_rest(tx_id)
    #print(json.dumps(retrived_data['asset']['data'],indent=3))
    