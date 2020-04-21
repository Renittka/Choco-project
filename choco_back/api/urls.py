from django.urls import path

from api.views.views import categories_list, category_restaurants, restaurant_products, product_order, product_detail, \
    restaurants_list

urlpatterns = [
    path('categories/', categories_list),
    path('categories/<int:category_id>/', category_restaurants),
    path('categories/<int:category_id>/<int:restaurant_id>/', restaurant_products),
    path('categories/<int:category_id>/<int:restaurant_id>/<int:product_id>/', product_detail),

    path('restaurants/', restaurants_list),

    path('order/', product_order)
    # path('login/', login),
    # path('registration/', signup)
]