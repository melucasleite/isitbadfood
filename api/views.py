from rest_framework import viewsets
from api.models import Food
from api.serializers import FoodSerializer

# Create your views here.
class FoodViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
