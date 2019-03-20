from django.shortcuts import render
from django.http import JsonResponse
from ..Packages.auth_api import get_random_number

def test_conn(request):
    rand_num=get_random_number.get_random_number('80178ae696d5a324de29c965f4705dc46022e6dff17894391c2da1c1ac477826')
    return JsonResponse({'test':rand_num})
