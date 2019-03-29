
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from ..Packages.auth_api.CounterfeitList import counterfeit_list_count
from ..DatabaseConnector import db_connection


@csrf_exempt
def get_counterfeit_list(request):
    conn=db_connection.get_connection()
    city_count=counterfeit_list_count.get_count(conn)
    return JsonResponse({'count':city_count})