from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json

from ..Packages.auth_api import db_connection
from ..Packages.auth_api.passwordvalidate import validate_password
from .. import default_constant_values

@csrf_exempt
def validate_manufacturer(request):
    conn=db_connection.get_connection()
    data=request.body.decode()
    request_dict=json.loads(data)
    username=request_dict['user']
    password=request_dict['password']
    status=validate_password.validate_password(conn, username, password)
    print('login status', status)
    key=default_constant_values.JWT_256_BIT_KEY
    return JsonResponse({'status':status,'secret': key})
    