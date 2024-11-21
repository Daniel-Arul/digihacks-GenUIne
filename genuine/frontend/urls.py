from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CharityViewSet

router = DefaultRouter()
router.register(r'charities', CharityViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
