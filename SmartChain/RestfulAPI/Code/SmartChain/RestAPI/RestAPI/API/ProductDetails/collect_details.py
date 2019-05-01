from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json

from ..Packages.blockdb import write_to_db
from ..Packages.randomNumberGen import generate_randnum
from ..Packages.auth_api.RandomNumberPool import insert_number
from ..Packages.auth_api.HashRandomNumber import insert_hash_randnum

from ..Packages.auth_api import db_connection
import jwt
from .. import default_constant_values
# NOTE Storing the details from the manufacturer about the medical suppliment
# 
# The data is received in the form of json 
# Step 1: First the data is written into blockchain, then it returns a 64-bit
#         transaction id, the data can be retrived using this transaction id
# Step 2: A psudo random number is generated 
# Step 3: Insert random number into random number pool 
# Step 4: The psudo random number and the hash are stored in the database
# 
#  # TODO add hash and randnum to hash_randnumber table
    # insert hash into random_number_pool table
    # organize auth_api folder #
#



@csrf_exempt
def details_collector(request):
    conn=db_connection.get_connection()
    data=request.body.decode()
    request_dict=json.loads(data)
    print(request_dict)
    decoded_dict= jwt.decode(request_dict, default_constant_values.JWT_256_BIT_KEY, algorithms=['HS256'])
    hash_value=write_to_db.write_to_db(dict(decoded_dict))
    rand_num=generate_randnum.get_random_number()
    insert_number.insert_number(rand_num,conn)
    insert_hash_randnum.insert_random_num(hash_value,rand_num,conn)
    return JsonResponse({"conn":request_dict,'hash':hash_value})