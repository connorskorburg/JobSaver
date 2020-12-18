from django.db import models

# Create your models here.

# model for user that can have applications, interviews, and users that they have connected with in their network
class User(models.Model):
  firstName = models.CharField(max_length=25, blank=False)
  lastName = models.CharField(max_length=40, blank=False)
  email = models.CharField(max_length=100, blank=False)
  password = models.CharField(max_length=255, blank=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
# model for job applications
class Application(models.Model):
  title = models.CharField(max_length=100, blank=False)
  description = models.TextField()
  company_name = models.CharField(max_length=100, blank=False)
  application_link = models.URLField()
  company_link = models.URLField()
  application_status = models.CharField(max_length=100, blank=False)
  date_applied = models.DateField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  applicant = models.ForeignKey(User, related_name='applications', on_delete=models.CASCADE)
  
# model for interviews
class Interview(models.Model):
  company = models.CharField(max_length=100, blank=False)
  interviewer_name = models.CharField(max_length=200)
  email = models.CharField(max_length=100)
  interview_date = models.DateField()
  phone_number = models.CharField(max_length=20)
  comment = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  user_being_interviewed = models.ForeignKey(User, related_name='interviews', on_delete=models.CASCADE)
  
# model for person you have connected with
class Connection(models.Model):
  firstName = models.CharField(max_length=25, blank=False)
  lastName = models.CharField(max_length=40, blank=False)
  email = models.CharField(max_length=100)
  website_link = models.URLField()
  linkedin_link = models.URLField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  user_connected = models.ForeignKey(User, related_name='connections', on_delete=models.CASCADE)