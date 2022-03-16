from rest_framework import serializers

from api.models import Food

class FoodSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Food
        fields = ["id", "name", "image", "is_bad_food"]