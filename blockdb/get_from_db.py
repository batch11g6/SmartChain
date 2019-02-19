from bigchaindb_driver.crypto import generate_keypair
import json
import argparse
import big_chain_conn


# input Dict data which 
# returns transaction id 
def keyword_search_db(keyword):
    bdb=big_chain_conn.get_connection()
    return json.dumps(bdb.assets.get(search=keyword),indent=2)

def get_from_db(transaction_id):
    bdb=big_chain_conn.get_connection()
    retrived_data = bdb.transactions.retrieve(transaction_id)
    return retrived_data

# cb7f3d136655a551ba2d2735e2662f05857973d4dfa98eaa95feef74e7eb4723 // GLOBAL
# #d0ecc79e76114636b2e39af0fe200d3756addf1d01d89b969c7056fd85a81f20 // GLOBAL     
if __name__=='__main__':
    tx_id=''
    keyword=''
    parser=argparse.ArgumentParser(description="Get Data from DB")
    parser.add_argument('-i', '--id', type=str, required=False ,help="Transaction ID")
    #parser.add_argument('-k', '--keyword', type=str, required=False ,help="Enter key word to and search is it exists in DB")
    args = parser.parse_args()

    tx_id=args.id
    #keyword=args.keyword

    retrived_data=get_from_db(tx_id)
    print(json.dumps(retrived_data['asset']['data'],indent=3))
    #print(keyword_search_db('hello'))
    