from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from ..Packages.auth_api.CounterfeitCountCityByName import get_counterfeit_by_name
from ..DatabaseConnector import db_connection

@csrf_exempt
def get_count_by_city(request):

    conn=db_connection.get_connection()
    data=request.body.decode()
    Dict=json.loads(data)
    city_name=Dict['city']
    print(city_name)
    my_city_count=get_counterfeit_by_name.get_count_by_name(city_name,conn)

    return JsonResponse({
        'count':my_city_count
    })