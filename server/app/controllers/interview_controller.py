from django.http.response import JsonResponse
# rest framework imports
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import *
from ..serializers import *

# create method for interview
@api_view(['POST'])
def createInterview(request):
  if request.method == 'POST':
    interview_data = JSONParser().parse(request)
    try:
      # check to see if user exists
      user_id = int(interview_data['user_being_interviewed'])
      user = User.objects.get(id=user_id)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
    # serialize data and make sure it is valid
    interview_serializer = InterviewSerializer(data=interview_data)
    if interview_serializer.is_valid():
      # create application
      interview_serializer.save()
      return JsonResponse(interview_serializer.data,status=status.HTTP_201_CREATED) 
    else:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  else:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  
# route for reading/deleting/updating interview by ID
@api_view(['GET','DELETE','PATCH'])
def updateDeleteGetInterviewByID(request, id):
  try:
    interview = Interview.objects.get(id=id)
  except:
    return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)
  if request.method == 'GET':
    try:
      serialized_interview = InterviewSerializer(interview)
      return JsonResponse(serialized_interview.data, status=status.HTTP_302_FOUND)
    except:
      return JsonResponse({'message': 'Bad Request'} ,status=status.HTTP_400_BAD_REQUEST)