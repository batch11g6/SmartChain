from django.shortcuts import render
from django.http import JsonResponse
from ..Packages.auth_api.RandomNumberPool import get_random_number

from ..Packages.auth_api import db_connection


def test_conn(request):
    conn=db_connection.get_connection()
    rand_num=get_random_number.get_random_number('80178ae696d5a324de29c965f4705dc46022e6dff17894391c2da1c1ac477826',conn)
    return JsonResponse({'test':rand_num})
