from django.urls import path

# categories/ - List of all Categories
# categories/<int:category_id>/ - List of all Restaurants of one Category
# categories/<int:company_id>/<int:restaurant_id>/ - List of all Products of one Restaurant
# categories/<int:company_id>/<int:restaurant_id>/<int:product_id> - Order of one Product
# login/ - Login, verifying data from the database
# signup/ - Signup, add data to the database

from api.views.views import categories_list, category_restaurants, restaurant_products, product_order

urlpatterns = [
    path('categories/', categories_list),
    path('categories/<int:category_id>/', category_restaurants),
    path('categories/<int:category_id>/<int:restaurant_id>/', restaurant_products),
    path('categories/<int:category_id>/<int:restaurant_id>/<int:product_id>', product_order)
    # path('login/', login),
    # path('signup/', signup)
]