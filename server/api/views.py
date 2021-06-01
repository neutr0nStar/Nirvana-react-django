from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Place
from .serializer import PlaceSerializer

# Create your views here.

def index(request):
    return HttpResponse("Use /api to use api")

@api_view(['GET'])
def api_places(request):
    places = Place.objects.all()
    places_serialized = PlaceSerializer(places, many=True)
    return Response(places_serialized.data)

@api_view(['GET'])
def api_place(request, pk):
    place = Place.objects.get(pk=pk)
    place_serialized = PlaceSerializer(place)
    return Response(place_serialized.data)
