from django.urls import path
from django.views.generic import TemplateView
from . import views
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('', views.CategoryList.as_view()),
    path('recipy/<int:pk>/', views.RecipyDetail.as_view()),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
    path('openapi/', get_schema_view(
        title="Cookbook",
        description="A little cookbook!"
    ), name='openapi-schema'),
]
