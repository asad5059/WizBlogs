from datetime import datetime
from rest_framework import serializers

from .models import UsersTable

class UsersTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersTable
        fields = ['username', 'firstname', 'lastname', 'blogs', 'blogs_count', 'created_at']

        extra_kwargs = {
            'blogs': {'required': False}, 
            'blogs_count': {'required': False}
        }
