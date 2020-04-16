from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from api.models import Category, Restaurant, Product, Order
from django.http import JsonResponse
from api.serializers import CategorySerializer, RestaurantSerializer, ProductSerializer


@csrf_exempt
def categories_list(request):
    if request.method == 'GET':
        try:
            categories = Category.objects.all()
        except Category.DoesNotExist as e:
            return JsonResponse({'error': str(e)})

        # categories_json = [category.to_json() for category in categories]
        # return JsonResponse(categories_json, safe=False)
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = CategorySerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        # return JsonResponse(category.to_json())
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)

        serializer = CategorySerializer(instance=category, data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def category_restaurants(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        restaurants = category.restaurants.all()

        # restaurants_json = [restaurant.to_json() for restaurant in restaurants]
        # return JsonResponse(restaurants_json, safe=False)

        serializer = RestaurantSerializer(restaurants, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = RestaurantSerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


@csrf_exempt
def restaurant_products(request, restaurant_id):
    try:
        restaurant = Restaurant.objects.get(id=restaurant_id)
    except Restaurant.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        products = restaurant.products.all()

        # products_json = [product.to_json() for product in products]
        # return JsonResponse(products_json, safe=False)

        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = ProductSerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


@csrf_exempt
def restaurant_detail(request, restaurant_id):
    try:
        restaurant = Restaurant.objects.get(id=restaurant_id)
    except Restaurant.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = RestaurantSerializer(restaurant)
        # return JsonResponse(restaurant.to_json())
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)

        serializer = RestaurantSerializer(instance=restaurant, data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        restaurant.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def product_order(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        # return JsonResponse(product_id.to_json())
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)

        serializer = ProductSerializer(instance=product, data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        product.delete()
        return JsonResponse({'deleted': True})
