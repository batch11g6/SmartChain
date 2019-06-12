from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from ..Packages.auth_api.PackageUpdate import get_all_details
from ..DatabaseConnector import db_connection

import json

@csrf_exempt
def get_product_status(request):
    conn=db_connection.get_connection()
    data=request.body.decode()
    code_dict=json.loads(data)
    product_update= get_all_details.get_all_details(conn, code_dict['pkg_id'])
    return JsonResponse({"product_update": product_update})