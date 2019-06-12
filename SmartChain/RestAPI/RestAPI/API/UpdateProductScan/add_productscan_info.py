from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from ..Packages.auth_api.PackageUpdate import add_package_update
from ..DatabaseConnector import db_connection

import json

##
# Handels the product ID scan adds cureent location and time stamp info to the Database
# #
@csrf_exempt
def add_scan_info(request):
    conn=db_connection.get_connection()
    data=request.body.decode()
    code_dict=json.loads(data)
    print(code_dict)
    pkg_id=code_dict['pkg_id']
    longi=code_dict['longi']
    lati=code_dict['lati']
    ts=code_dict['ts']
    status= add_package_update.insert_product_tracking_info(conn, pkg_id, longi, lati, ts)
    return JsonResponse({'status': status})