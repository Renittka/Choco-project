from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=300)
    image = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Restaurant(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default="", editable=False)
    name = models.CharField(max_length=300)
    delivery_time = models.FloatField()
    delivery_cost = models.FloatField()
    min_order = models.FloatField()
    rating = models.FloatField()
    description = models.TextField(default='')
    image = models.CharField(max_length=300)

    def to_json(self):
        return {
            'category_id': self.category_id,
            'id': self.id,
            'name': self.name,
            'delivery_time': self.delivery_time,
            'delivery_cost': self.delivery_cost,
            'min_order': self.min_order,
            'rating': self.rating,
            'description': self.description
        }


class Product(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, default="", editable=False)
    name = models.CharField(max_length=300)
    price = models.FloatField()
    delivery_cost = models.FloatField()
    description = models.TextField(default='')
    image = models.CharField(max_length=300)

    def to_json(self):
        return {
            'restaurant_id': self.restaurant_id,
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'delivery_cost': self.delivery_cost,
            'description': self.description
        }
