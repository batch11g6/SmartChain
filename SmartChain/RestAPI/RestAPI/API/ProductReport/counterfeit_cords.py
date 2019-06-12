
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from ..Packages.auth_api.CounterfeitList import get_all_city_cords
from ..Packages.auth_api.CityCounterfeitCount import get_counterfeit_count
from ..DatabaseConnector import db_connection



@csrf_exempt
def get_city_cords(request):

    conn=db_connection.get_connection()
    location_data=get_all_city_cords.get_all_city_cords(conn)

    return JsonResponse({
        'cords':location_data
    })