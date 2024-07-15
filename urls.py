# ecommerce_app/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_list, name='product_list'),
    # Add more paths for cart, checkout, etc.
]
