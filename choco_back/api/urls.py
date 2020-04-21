from django.urls import path

from api.views.views import categories_list, category_detail, category_restaurants, restaurants_list, \
    restaurant_detail, restaurant_products, restaurant_detail, product_order, product_detail, restaurants_list, \
    products_list

urlpatterns = [
    path('categories/', categories_list),  # category list
    path('categories/<int:category_id>/', category_detail),  # category detail
    path('categories/<int:category_id>/restaurants/', category_restaurants),  # restaurants by category

    path('categories/<int:category_id>/restaurants/<int:restaurant_id>/', restaurant_detail),  # restaurant detail

    # products by restaurant
    path('categories/<int:category_id>/restaurants/<int:restaurant_id>/products/', restaurant_products),
    # product detail
    path('categories/<int:category_id>/restaurants/<int:restaurant_id>/products/<int:product_id>/', product_detail),

    path('restaurants/', restaurants_list),
    path('products/', products_list),

    path('order/', product_order)
    # path('login/', login),
    # path('registration/', signup)
]
