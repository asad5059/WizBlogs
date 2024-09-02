from django.db import models
from datetime import datetime


class UsersTable(models.Model):
    '''
    Table for blog users
    '''
    id = models.BigIntegerField(primary_key=True)
    username = models.CharField(null=False, max_length=25)
    firstname = models.CharField(null=True, max_length=62)
    lastname = models.CharField(null=False, max_length=62)
    blogs = models.JSONField()
    blogs_count = models.BigIntegerField()
    created_at = models.DateTimeField(default=datetime.now())

    class Meta:
        verbose_name = 'Users Table'