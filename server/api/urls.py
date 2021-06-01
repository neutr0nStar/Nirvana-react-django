from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('api/places', views.api_places, name="apiPlaces"),
    path('api/place/<int:pk>', views.api_place, name="apiPlace"),
]