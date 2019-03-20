from flask import Flask,jsonify
from blockdb import get_from_db

app=Flask(__name__)


@app.route('/',methods=['GET','POST'])
def test_conn():
    return '''
    <h1> REST Service for bigchain DB</h1>
    <a href="https://github.com/batch11g6/SmartChain">https://github.com/batch11g6/SmartChain</a>
    '''



@app.route('/api/productInfo/getInfo/<tx_id>',methods=['GET','POST'])
def get_prod_info(tx_id):
    #transaction_id='80178ae696d5a324de29c965f4705dc46022e6dff17894391c2da1c1ac477826'
    # ec2 : 6b4d1964188e6d1d51f7d2b83dcb6e99405f5982abf64ffa527e6e6ca1bba98f
    res=get_from_db.get_from_rest(tx_id)

    # Check the satus code first to know if the ID is actually valid
    try:
        return jsonify({
            'result':res['asset']['data'],
            'status_code':0
            })
    # IF the satus code is 1 the hash is not valid
    except:
        return jsonify({
            "result":"un identified token",
            'status_code':1
        })




app.run(port=8087,debug=True)