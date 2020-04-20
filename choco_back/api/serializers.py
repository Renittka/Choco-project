# from rest_framework import serializers
# from api.models import Company, Vacancy
from rest_framework import serializers
from api.models import Category, Restaurant, Product


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    image = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class CategorySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'image')


class RestaurantSerializer(serializers.ModelSerializer):
    category = CategorySerializer2(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'delivery_time', 'delivery_cost', 'min_order',  'description', 'image', 'category',
                  'category_id')


class ProductSerializer(serializers.ModelSerializer):
    restaurant = RestaurantSerializer(read_only=True)
    restaurant_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'price', 'image', 'restaurant', 'restaurant_id')



