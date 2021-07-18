from django.http import response
from django.http.response import HttpResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
import datetime

from .models import Package, Place
from .serializer import UserSerializer, PackageSeializer, PlaceSerializer

# Create your views here.

# default route, tell user to user api
def index(request):
    return HttpResponse("Use /api to use api")

# get all places info
@api_view(['GET'])
def get_places(request):
    places = Place.objects.all()
    places_serialized = PlaceSerializer(places, many=True)
    return Response(places_serialized.data)


# get one place's info
@api_view(['GET'])
def get_place(request, pk):
    try:
        place = Place.objects.get(pk=pk)
        place_serialized = PlaceSerializer(place)
        return Response(place_serialized.data)
    except:
        return Response(status=404)


# Create a package
# user must be authenticated to do so
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_package(request):
    try:
        starting_date = request.data['starting_date']
        no_of_days = request.data['no_of_days']
        no_of_people = request.data['no_of_people']
        price = request.data['price']
        place_id = request.data['place_id']
        user = request.user
        place = Place.objects.get(pk=place_id)
        new_package = Package(
            owner=user,
            destination=place,
            no_of_people=no_of_people,
            no_of_days=no_of_days,
            price=price,
            starting_date=starting_date
        )
        new_package.save()
        return Response(status=200)
    except:
        return Response(status=400)

# delete a package
# user must be authenticated to do so
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def delete_package(request, pk):
    try:
        package = Package.objects.get(pk=pk)
        package.delete()
        return Response(status=200)
    except:
        return Response(status=400)


# Get user's details
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    user_serialized = UserSerializer(user)
    return Response(user_serialized.data)


# Get user's packages
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_packages(request):
    user = request.user
    packages = user.package_set.order_by('-starting_date')
    serialized_packages = PackageSeializer(packages, many=True)
    return Response(serialized_packages.data)

# Get a particular package
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


# Register a new user
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
        token = Token.objects.get(user=new_user)
        return Response({"token": token.key}, status=200)
    except:
        return Response(status=406)