from django.http.response import JsonResponse
# rest framework imports
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import *
from ..serializers import *

# create method for application
@api_view(['POST'])
def createApplication(request):
  if request.method == 'POST':
    application_data = JSONParser().parse(request)
    try:
      # check to see if user exists
      user_id = int(application_data['applicant'])
      user = User.objects.get(id=user_id)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
    # serialize data and make sure it is valid
    application_serializer = ApplicationSerializer(data=application_data)
    if application_serializer.is_valid():
      # create application
      application_serializer.save()
      return JsonResponse(application_serializer.data,status=status.HTTP_201_CREATED) 
    else:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  else:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  
# route for reading/deleting/updating application by ID
@api_view(['GET','DELETE','PATCH'])
def updateDeleteGetApplicationByID(request, id):
  # fetch application from mysql DB
  try:
    application = Application.objects.get(id=id)
  except:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  if request.method == 'GET':
    try:
      serialized_application = ApplicationSerializer(application)
      return JsonResponse(serialized_application.data, status=status.HTTP_302_FOUND)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  if request.method == 'DELETE':
    try:
      application.delete()
      return JsonResponse({'message': 'application has been deleted'}, status=status.HTTP_202_ACCEPTED)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  if request.method == 'PATCH':
    try:
      application_data = JSONParser().parse(request)
      application_serializer = ApplicationSerializer(application, data=application_data, partial=True)
      if application_serializer.is_valid():
        try:
          application_serializer.save()
          return JsonResponse(application_serializer.data, status=status.HTTP_202_ACCEPTED)
        except:
          return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  else:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)