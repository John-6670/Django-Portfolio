from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, Test

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('', include(router.urls)),
    path('test/', Test.as_view())
]
