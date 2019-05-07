from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

import json

from ..Packages.auth_api import db_connection
from ..Packages.auth_api.passwordvalidate import validate_pharma_password
from .. import default_constant_values


@csrf_exempt
def validate_pharma(request):
    conn=db_connection.get_connection()
    data=request.body.decode()
    request_dict=json.loads(data)
    print(request_dict)
    username=request_dict['user']
    password=request_dict['password']
    status=validate_pharma_password.validate_pharma_creds(conn, username, password)
    print('Pahrma login status', status)
    return JsonResponse({'status':status})