from rest_framework import viewsets, permissions

from .models import Project
from .serializers import ProjectSerializer


# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_permissions(self):
        if self.request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
            self.permission_classes = [permissions.IsAdminUser,]
        else:
            self.permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
        return super(ProjectViewSet, self).get_permissions()

