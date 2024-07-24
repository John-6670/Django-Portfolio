from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['image']


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
