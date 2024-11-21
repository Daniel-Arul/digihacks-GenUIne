from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CharityViewSet
import views 

router = DefaultRouter()
router.register(r'charities', CharityViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('createaccount', views.createAccount)
]
