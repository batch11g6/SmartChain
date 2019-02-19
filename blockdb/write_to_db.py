
#from bigchaindb_driver import BigchainDB
from bigchaindb_driver.crypto import generate_keypair
import json 
import argparse

import big_chain_conn


# NOTE input Dict data which 
# returns transaction id 
# Store the transaction id in a structured databse (SQL)
#            Random_number  Transaction ID
#
#      Update the tranaction hash every stage, since the previous stage 
#      transaction hash is stored in new block there is no worry about
#      loss of data
#  When the product reaches the consumer, the last block contains the 
#  details of all previous blocks( Hence can be traced)

# Accepts data of type dictonary and stores exactly in same format 
# as passed and is referenced by a Transaction id which is to be stoed and 
# maintained to retive the block in future 

def write_to_db(data):
    bdb = big_chain_conn.get_connection()
    key_pair=generate_keypair()

    tx = bdb.transactions.prepare(
        operation='CREATE',
        signers=key_pair.public_key,
        asset={'data': data})

    signed_tx = bdb.transactions.fulfill(
    tx,
    private_keys=key_pair.private_key)

    transaction_details = bdb.transactions.send_commit(signed_tx)
    print(json.dumps(transaction_details,indent=2))
    return transaction_details['id']


if __name__=='__main__':

    parser=argparse.ArgumentParser(description="Write dict type data to BigChain")
    parser.add_argument('-m', '--message', type=str, required=True ,help="Message")
    args = parser.parse_args()
    message=args.message

    from datetime import datetime
    now = datetime.now()
    timestamp = datetime.timestamp(now)
    dt_object = datetime.fromtimestamp(timestamp)
    print(dt_object)

    print('transaction id '+write_to_db({'message':message,
                                         'time':str(dt_object)
                                        }))
