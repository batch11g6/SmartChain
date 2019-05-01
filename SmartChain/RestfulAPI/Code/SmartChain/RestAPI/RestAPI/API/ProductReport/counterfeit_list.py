
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from ..Packages.auth_api.CounterfeitList import counterfeit_list_count
from ..Packages.auth_api.CityCounterfeitCount import get_counterfeit_count
from ..DatabaseConnector import db_connection


@csrf_exempt
def get_counterfeit_list(request):
    conn = db_connection.get_connection()

    data=request.body.decode()
    Dict=json.loads(data)
    lati=Dict['lati']
    longi=Dict['longi']

    city_count = counterfeit_list_count.get_count(conn)
    your_city=get_counterfeit_count.get_count_of_city(lati,longi,conn)


    return JsonResponse({
        'count': city_count,
        'your_city':your_city
    })
