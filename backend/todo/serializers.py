from rest_framework import serializers
from .models import Todo

# code specifies the model to work with and fields to be converted to JSON
# serializers define the API representation 
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title','description', 'completed')