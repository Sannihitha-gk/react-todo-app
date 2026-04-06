from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Restaurant

@api_view(['GET'])
def get_restaurants(request):
    data = list(Restaurant.objects.values())
    return Response(data)

