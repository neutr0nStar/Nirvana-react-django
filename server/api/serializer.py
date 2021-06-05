from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import Place, Package

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'

class PackageSeializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = '__all__'