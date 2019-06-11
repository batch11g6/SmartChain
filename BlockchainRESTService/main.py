from flask import Flask, jsonify, request
from blockdb import get_from_db, write_to_db
import time
import socket 
import psutil


app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def test_conn():
    return jsonify({"status":True,
    "code":'https://github.com/batch11g6/SmartChain',
    "time": str(time.ctime()),
    "uptime": str((time.time() - psutil.boot_time())%60)+" mins"
    })


@app.route('/api/productInfo/getInfo/<tx_id>', methods=['GET', 'POST'])
def get_prod_info(tx_id):
    # transaction_id='80178ae696d5a324de29c965f4705dc46022e6dff17894391c2da1c1ac477826'
    # ec2 : 6b4d1964188e6d1d51f7d2b83dcb6e99405f5982abf64ffa527e6e6ca1bba98f
    res = get_from_db.get_from_rest(tx_id)

    # Check the satus code first to know if the ID is actually valid
    try:
        return jsonify({
            'result': res['asset']['data'],
            'status_code': 0
        })
    # IF the satus code is 1 the hash is not valid
    except:
        return jsonify({
            "result": "un identified token",
            'status_code': 1
        })


@app.route('/api/productInfo/setInfo/', methods=['GET', 'POST'])
def set_product_info():
    content = request.json
    print (content)
    hash_value=write_to_db.write_to_db(content)
    return jsonify({"hash":hash_value})


app.run(port=8087, debug=True, ssl_context=('cert.pem', 'key.pem'))
