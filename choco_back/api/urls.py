from django.urls import path

# categories/ - List of all Categories
# categories/<int:category_id>/ - List of all Restaurants of one Category
# categories/<int:company_id>/<int:restaurant_id>/ - List of all Products of one Restaurant
# categories/<int:company_id>/<int:restaurant_id>/<int:product_id> - Order of one Product
# login/ - Login, verifying data from the database
# signup/ - Signup, add data to the database

from api.views import categories_list, category_restaurants, restaurants_products, product_order, login, signup

urlpatterns = [
    path('categories/', categories_list),
    path('categories/<int:category_id>/', category_restaurants),
    path('categories/<int:category_id>/<int:restaurant_id>/', restaurants_products),
    path('categories/<int:category_id>/<int:restaurant_id>/<int:product_id>', product_order),
    path('login/', login),
    path('signup/', signup)
]