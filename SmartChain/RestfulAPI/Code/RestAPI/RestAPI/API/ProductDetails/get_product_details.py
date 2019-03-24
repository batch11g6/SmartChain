from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from ..Packages.blockdb import get_from_db
from ..Packages.auth_api import db_connection

@csrf_exempt
def get_product_information(request):
    data=request.body.decode()
    request_dict=json.loads(data)
    print("request_dict",request_dict)
    tx_code=request_dict['code']
    conn=db_connection.get_connection()
    try:
        data_json=get_from_db.get_from_rest(tx_code,conn)
        print(data_json)
    except:
        data_json={'data':'Unable to reach bigchain DB'}
    
    return JsonResponse({'result':data_json})
