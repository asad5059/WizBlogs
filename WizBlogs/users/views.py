import logging
from rest_framework import status
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serailizers import UsersTableSerializer

@api_view(['POST'])
def register_user(request):
    serializer =  UsersTableSerializer(data=request.data)

    if serializer.is_valid():
        logging.info('Creating new user.......')
        serializer.save()
        print(serializer.data)

    else:
        return Response(
            data= {
                'error': 'Invalid data provided',
                'error_log': serializer.errors
            }, 
            status=status.HTTP_400_BAD_REQUEST
        )
    
    return Response(
        data={ 'message': 'Registration for the user successful.' }, 
        status=status.HTTP_200_OK
    )