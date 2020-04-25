from rest_framework import serializers
from names.models import Name

# Name serailizer
class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields='__all__'