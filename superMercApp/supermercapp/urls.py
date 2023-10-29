from .views import ProductoViewSet
from rest_framework import routers
from django.urls import path, include


routers = routers.DefaultRouter()

routers.register(r"productos", ProductoViewSet, "productos")


urlpatterns = [path("", include(routers.urls))]
