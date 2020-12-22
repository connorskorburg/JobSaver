from django.urls import path
from . import views

urlpatterns = [
    path('user', views.createUser),
    path('user/<id>', views.updateDeleteGetUserByID),
    path('user/applications/<id>', views.userApplications),
    path('user/interviews/<id>', views.userInterviews),
    path('user/connections/<id>', views.userConnections),
    path('application', views.createApplication),
    path('application/<id>', views.updateDeleteGetApplicationByID),
    path('interview', views.createInterview),
    path('interview/<id>', views.updateDeleteGetInterviewByID),
    path('connection', views.createConnection),
    path('connection/<id>', views.updateDeleteGetConnectionByID)
]
