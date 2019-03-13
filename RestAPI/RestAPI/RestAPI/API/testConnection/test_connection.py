from django.shortcuts import render
from django.http import JsonResponse


def test_conn(request):
    return JsonResponse({'test':'ok'})
