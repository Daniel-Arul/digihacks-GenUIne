from django.shortcuts import render
from rest_framework import viewsets
from .models import Charity
from .serializers import CharitySerializer

# Serve the React app
def index(request):
    return render(request, "frontend/index.html")

# Charity API ViewSet
class CharityViewSet(viewsets.ModelViewSet):
    queryset = Charity.objects.all()
    serializer_class = CharitySerializer
