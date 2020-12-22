from django.shortcuts import render, redirect, HttpResponse
from django.http.response import JsonResponse
# rest framework imports
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status

# import serializers
from app.serializers import *
from .models import *

# import controllers
from .controllers.user_controller import *
from .controllers.application_controller import *
from .controllers.interview_controller import *
from .controllers.connection_controller import *
# Create your views here.
  
      

 
'''
JSON SAMPLE DATA TO TEST ON POSTMAN

USER:
{
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@test.com",
    "password": "password"
}


APPLICATION:

{
    "title": "Full Stack Developer",
    "description": "Work with MERN Stack",
    "company_name": "Test Company",
    "application_link": "https://test.com",
    "company_link": "https://test.com",
    "application_status": "pending",
    "date_applied": "2020-12-05",
    "applicant": 1
}


INTERVIEW:

{
  "company": "Test Company",
  "interviewer_name": "Bob Smith",
  "email": "test@interview.com",
  "interview_date": "2020-12-28",
  "phone_number": "1-234-657-4564",
  "comment": "Interview for full stack developer",
  "user_being_interviewed": 1
}


CONNECTION:

{
    "firstName": "Ken",
    "lastName": "Davidson",
    "email": "ken@test.com",
    "website_link": "https://ken.test.com",
    "linkedin_link": "https://linkedin.com/in/kendavidson",
    "user_connected": 1
}

'''