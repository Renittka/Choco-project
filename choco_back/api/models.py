from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=300)
    image = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'Category id={self.id}, name={self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Restaurant(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default="", editable=False, related_name="categories")
    name = models.CharField(max_length=300)
    delivery_time = models.FloatField()
    delivery_cost = models.FloatField()
    min_order = models.FloatField()
    description = models.TextField(default='')
    image = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Restaurant'
        verbose_name_plural = 'Restaurants'

    def __str__(self):
        return f'Restaurant id={self.id}, name={self.name}'

    def to_json(self):
        return {
            'category_id': self.category_id,
            'id': self.id,
            'name': self.name,
            'delivery_time': self.delivery_time,
            'delivery_cost': self.delivery_cost,
            'min_order': self.min_order,
            'description': self.description
        }


class Product(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, default="", editable=False)
    name = models.CharField(max_length=300)
    price = models.FloatField()

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'Product id={self.id}, name={self.name}'

    def to_json(self):
        return {
            'restaurant_id': self.restaurant_id,
            'id': self.id,
            'name': self.name,
            'price': self.price
        }


class Order(models.Model):
    username = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    phone_number = models.CharField(max_length=300)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default="", editable=False)
    product_number = models.IntegerField()
    total_cost = models.FloatField()
    comments = models.TextField(default='')
