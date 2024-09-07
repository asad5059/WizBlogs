from django.db import models
from datetime import datetime


class UsersTable(models.Model):
    '''
    Table for blog users
    '''
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(null=False, max_length=25)
    firstname = models.CharField(null=True, max_length=62)
    lastname = models.CharField(null=False, max_length=62)
    blogs = models.JSONField(default=list)
    blogs_count = models.BigIntegerField(default=0)
    created_at = models.DateTimeField(default=datetime.now())

    class Meta:
        verbose_name = 'Users Table'