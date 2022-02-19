from django.shortcuts import render
from cookbook import serializers
from rest_framework import generics
from cookbook.models import *


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer


class RecipyDetail(generics.RetrieveAPIView):
    serializer_class = serializers.RecipySerializer
    def get_object(self):
        id = self.kwargs.get('pk')
        return Recipy.objects.get(id=id)

