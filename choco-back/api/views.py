from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# from api.models import Category, Restaurant, Product
from django.http import JsonResponse


@csrf_exempt
def categories_list(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


@csrf_exempt
def category_restaurants(request, category_id):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


@csrf_exempt
def restaurants_products(request, restaurant_id):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


@csrf_exempt
def product_order(request, product_id):
    if request.method == 'GET':
        pass
    elif request.method == 'PUT':
        pass
    elif request.method == 'DELETE':
        pass


@csrf_exempt
def login(request):
    pass


@csrf_exempt
def signup(request):
    pass


