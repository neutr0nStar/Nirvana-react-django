from django.urls import path
from rest_framework.authtoken import views as token_views

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('api/places', views.get_places, name="getPlaces"),
    path('api/place/<int:pk>', views.get_place, name="getPlace"),
    path('api/packages', views.get_user_packages, name="getUserPackages"),
    path('api/package/<int:pk>', views.get_user_package, name="getUserPackage"),
    path('api/createPackage', views.create_package, name="createPackages"),
    path('api/deletePackage/<int:pk>', views.delete_package, name="deletePackage"),
    path('api/auth/getUser', views.get_user, name="getUser"),
    path('api/auth/register', views.register, name="register"),
    path('api/auth/obtainToken', token_views.obtain_auth_token, name="obtaineAuthToken")
]