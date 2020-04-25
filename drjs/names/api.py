from names.models import Name
from rest_framework import viewsets, permissions
from .serializers import NameSerializer

# Name viewset
class NameViewSet(viewsets.ModelViewSet):
    queryset = Name.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class=NameSerializer
