from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Place, Package

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'

class PackageSeializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = '__all__'