from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Category, Restaurant, Product
from api.serializers import CategorySerializer, RestaurantSerializer, ProductSerializer


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CategoryDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Category.objects.get(id=id)
        except Category.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, category_id):
        category = self.get_object(category_id)
        category.delete()

        return Response({'deleted': True})


class CategoryRestaurantsListAPIView(APIView):
    def get(self, request, category_id):
        try:
            restaurants = Restaurant.objects.filter(category_id=category_id)
        except Restaurant.DoesNotExist as e:
            return Response({'error': str(e)})

        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.data)


class RestaurantsListAPIView(APIView):
    def get(self, request):
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RestaurantDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Restaurant.objects.get(id=id)
        except Restaurant.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, restaurant_id):
        restaurant = self.get_object(restaurant_id)
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)

    def put(self, request, restaurant_id):
        restaurant = self.get_object(restaurant_id)
        serializer = RestaurantSerializer(instance=restaurant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, restaurant_id):
        restaurant = self.get_object(restaurant_id)
        restaurant.delete()

        return Response({'deleted': True})


class RestaurantProductsListAPIView(APIView):
    def get(self, request, restaurant_id):
        try:
            products = Product.objects.filter(restaurant_id=restaurant_id)
        except Product.DoesNotExist as e:
            return Response({'error': str(e)})

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.data)
