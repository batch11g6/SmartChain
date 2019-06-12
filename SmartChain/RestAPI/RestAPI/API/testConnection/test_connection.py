from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from ..Packages.auth_api.RandomNumberPool import get_random_number

from ..Packages.auth_api import db_connection


def test_conn(request):
    conn=db_connection.get_connection()
    rand_num=get_random_number.get_random_number('83ee07386da948aae6203a2f9b425551703804c279007de7855955c11afc80bd',conn)
    return JsonResponse({'test': rand_num})
