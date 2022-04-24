from django.shortcuts import render
from rest_framework import viewsets # wrote this in INSTALLED_APPS
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.
# viewsets handle URL construction

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()