from rest_framework import serializers

from .models import BlogPosts


class BlogPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPosts
        fields = ['title', 'author', 'body']
