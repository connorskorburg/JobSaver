from django.http.response import JsonResponse
# rest framework imports
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import *
from ..serializers import *

# create connection
@api_view(['POST'])
def createConnection(request):
  if request.method == 'POST':
    connection_data = JSONParser().parse(request)
    try:
      # check if user exists
      user_id = int(connection_data['user_connected'])
      user = User.objects.get(id=user_id)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
    # serialize data for DB
    connection_serializer = ConnectionSerializer(data=connection_data)
    if connection_serializer.is_valid():
      # create connection
      connection_serializer.save()
      return JsonResponse(connection_serializer.data, status=status.HTTP_201_CREATED)
    else:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  else:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  
# route for reading/deleting/updating connection by ID
@api_view(['GET','DELETE','PATCH'])
def updateDeleteGetConnectionByID(request, id):
  try:
    connection = Connection.objects.get(id=id)
  except:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  if request.method == 'GET':
    try:
      serialized_connection = ConnectionSerializer(connection)
      return JsonResponse(serialized_connection.data, status=status.HTTP_302_FOUND)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  if request.method == 'DELETE':
    try:
      connection.delete()
      return JsonResponse({'message': 'connection has been deleted'}, status=status.HTTP_202_ACCEPTED)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  if request.method == 'PATCH':
    try:
      connection_data = JSONParser().parse(request)
      connection_serializer = ConnectionSerializer(connection, data=connection_data, partial=True)
      if connection_serializer.is_valid():
        try:
          print(connection_serializer.is_valid())
          connection_serializer.save()
          return JsonResponse(connection_serializer.data, status=status.HTTP_202_ACCEPTED)
        except:
          return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)      
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  else:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
    