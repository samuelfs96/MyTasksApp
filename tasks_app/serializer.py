from rest_framework import serializers
from allauth.socialaccount.models import SocialAccount
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class SocialAccountSerializer(serializers.ModelSerializer):
    extra_data = serializers.JSONField()
    class Meta:
        model = SocialAccount
        fields = ('provider', 'uid', 'last_login', 'extra_data')
