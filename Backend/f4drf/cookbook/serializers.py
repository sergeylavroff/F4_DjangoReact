from dataclasses import fields
from rest_framework import serializers
from cookbook.models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields = '__all__'


class RecipySerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipy
        fields = '__all__'