from rest_framework import serializers
from app.models import *


# return only certain fields, do not want to send users password
# class implemented from https://www.thetopsites.net/article/53319787.shtml
class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    """
    A ModelSerializer that takes an additional `fields` argument that
    controls which fields should be displayed.
    """

    def __init__(self, *args, **kwargs):
        # Don't pass the 'fields' arg up to the superclass
        fields = kwargs.pop('fields', None)

        # Instantiate the superclass normally
        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

        if fields is not None:
            # Drop any fields that are not specified in the `fields` argument.
            allowed = set(fields)
            existing = set(self.fields.keys())
            for field_name in existing - allowed:
                self.fields.pop(field_name)

# serialize user model to json
class UserSerializer(DynamicFieldsModelSerializer):
  class Meta:
    model = User
    fields = '__all__'
    # fields = ('id', 'firstName', 'lastName', 'email', 'password', 'created_at', 'updated_at')

# serialize application model to json
class ApplicationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Application
    fields = ('id', 'title', 'description', 'company_name', 'application_link', 'company_link', 'application_status', 'date_applied', 'created_at', 'updated_at', 'applicant')

# serialize interview model to json
class InterviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Interview
    fields = ('id', 'company', 'interviewer_name', 'email', 'interview_date', 'phone_number', 'comment', 'created_at', 'updated_at', 'user_being_interviewed')

# serialize Connection model to json
class ConnectionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Connection
    fields = ('id', 'firstName', 'lastName', 'email', 'website_link', 'linkedin_link','created_at', 'updated_at', 'user_connected')