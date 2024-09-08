from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import BlogPostsSerializer


@api_view(['POST'])
def create_post(request):
    '''
    Creates new blog post
    '''

    serializer = BlogPostsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        
        return Response(data={ 'message': 'Post created' }, status=status.HTTP_200_OK)
    
    return Response(data={ 'error': serializer.errors }, status=status.HTTP_400_BAD_REQUEST)
