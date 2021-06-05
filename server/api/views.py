from django.http import response
from django.http.response import HttpResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Place
from .serializer import PackageSeializer, PlaceSerializer

# Create your views here.

def index(request):
    return HttpResponse("Use /api to use api")



@api_view(['GET'])
def get_places(request):
    places = Place.objects.all()
    places_serialized = PlaceSerializer(places, many=True)
    return Response(places_serialized.data)



@api_view(['GET'])
def get_place(request, pk):
    try:
        place = Place.objects.get(pk=pk)
        place_serialized = PlaceSerializer(place)
        return Response(place_serialized.data)
    except:
        return Response(status=404)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_packages(request):
    user = request.user
    packages = user.package_set.all()
    serialized_packages = PackageSeializer(packages, many=True)
    return Response(serialized_packages.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_package(request, pk):
    user = request.user
    try:
        package = user.package_set.get(pk=pk)
        serialized_package = PackageSeializer(package, many=False)
        return Response(serialized_package.data)
    except:
        return Response(status=404)


@api_view(['POST'])
def register(request):
    try: 
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']
        first_name = request.data['first_name']
        last_name = request.data['last_name']
        new_user = User.objects.create_user(username)
        new_user.email = email
        new_user.first_name = first_name
        new_user.last_name = last_name
        new_user.set_password(password)
        new_user.save()
        return Response(status=200)
    except:
        return Response(status=406)