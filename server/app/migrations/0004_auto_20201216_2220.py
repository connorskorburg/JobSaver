# Generated by Django 3.1.4 on 2020-12-16 22:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_application_connection_interview_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='connection',
            name='user_connected',
        ),
        migrations.RemoveField(
            model_name='interview',
            name='user_being_interviewed',
        ),
        migrations.DeleteModel(
            name='Application',
        ),
        migrations.DeleteModel(
            name='Connection',
        ),
        migrations.DeleteModel(
            name='Interview',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
