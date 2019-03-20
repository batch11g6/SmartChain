from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from ..Packages.blockdb import write_to_db
from ..Packages.randomNumberGen import generate_randnum
from ..Packages.auth_api import insert_number
from ..Packages.auth_api import insert_hash_randnum

@csrf_exempt
def details_collector(request):
    print(request.body)
    data=request.body.decode()
    #-----Details--------------
    request_dict=json.loads(data)
    # Store the details in blockchain 
    print(request_dict)
    hash_value=write_to_db.write_to_db(dict(request_dict))
    
    rand_num=generate_randnum.get_random_number()
    insert_hash_randnum.insert_random_num(hash_value,rand_num)
    insert_number.insert_number(rand_num)

    # TODO add hash and randnum to hash_randnumber table
    # insert hash into random_number_pool table
    # organize auth_api folder

    return JsonResponse({"conn":request_dict})