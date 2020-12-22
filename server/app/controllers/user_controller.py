from django.http.response import JsonResponse
# rest framework imports
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import *
from ..serializers import *

@api_view(['POST'])
def createUser(request):
  if request.method == 'POST':
    user_data = JSONParser().parse(request)
    user_serializer = UserSerializer(data=user_data)
    if user_serializer.is_valid():
      user_serializer.save()
      return JsonResponse(user_serializer.data,status=status.HTTP_201_CREATED)
    else:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  else:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  
# route for reading/deleting/updating user by ID
@api_view(['GET', 'PATCH', 'DELETE'])
def updateDeleteGetUserByID(request, id):
  # fetch user from mysql DB
  try:
    user = User.objects.get(id=id)
  except:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  # serialize and return user
  if request.method == 'GET':
    try:
      serialized_user = UserSerializer(user, fields = ('id', 'firstName', 'lastName', 'email', 'created_at', 'updated_at'))      
      return JsonResponse(serialized_user.data, status=status.HTTP_302_FOUND)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  # delete user from DB
  if request.method == 'DELETE':
    try:
      user.delete()
      return JsonResponse({'message': 'user has been deleted'},status=status.HTTP_202_ACCEPTED)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  # update user in DB
  if request.method == 'PATCH':
    user_data = JSONParser().parse(request)
    user_serializer = UserSerializer(user, data=user_data, partial=True, fields = ('id', 'firstName', 'lastName', 'email', 'created_at', 'updated_at'))
    if user_serializer.is_valid() and 'password' not in user_data:
      try:
        user_serializer.save()
        return JsonResponse(user_serializer.data, status=status.HTTP_202_ACCEPTED)
      except:
        return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
    else:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  else:
    # return bad request if methods fail
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  
# fetch all applications for specific user
@api_view(['GET'])
def userApplications(request, id):
  try:
    user = User.objects.get(id=id)
    applications = Application.objects.filter(applicant=user)
    application_serializer = ApplicationSerializer(applications, many=True)
    return JsonResponse(application_serializer.data, safe=False, status=status.HTTP_302_FOUND)
  except:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)

# fetch all interviews for specific user
@api_view(['GET'])
def userInterviews(request, id):
  try:
    user = User.objects.get(id=id)
    interviews = Interview.objects.filter(user_being_interviewed=user)
    interview_serializer = InterviewSerializer(interviews, many=True)
    return JsonResponse(interview_serializer.data, safe=False, status=status.HTTP_302_FOUND)
  except:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  
# fetch all connections for specific user
@api_view(['GET'])
def userConnections(request, id):
  try:
    user = User.objects.get(id=id)
    connections = Connection.objects.filter(user_connected=user)
    connection_serializer = ConnectionSerializer(connections, many=True)
    return JsonResponse(connection_serializer.data, safe=False, status=status.HTTP_302_FOUND)
  except:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
