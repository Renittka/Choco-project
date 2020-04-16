from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Category, Restaurant, Product
from api.serializers import CategorySerializer, RestaurantSerializer, ProductSerializer


@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def companies_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        category.delete()
        return Response({'deleted': True})


@api_view(['GET', 'POST'])
def category_restaurants(request, category_id):
    if request.method == 'GET':
        try:
            restaurants = Restaurant.objects.filter(category_id=category_id)
        except Restaurant.DoesNotExist as e:
            return Response({'error': str(e)})

        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'POST'])
def restaurants_list(request):
    if request.method == 'GET':
        try:
            restaurants = Restaurant.objects.all()
        except Restaurant.DoesNotExist as e:
            return Response({'error': str(e)})

        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def restaurant_detail(request, restaurant_id):
    try:
        restaurant = Restaurant.objects.get(id=restaurant_id)
    except Restaurant.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RestaurantSerializer(instance=restaurant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,  status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'DELETE':
        restaurant.delete()
        return Response({'deleted': True})

