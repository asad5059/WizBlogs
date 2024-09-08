from datetime import datetime
from django.db import models

from users.models import UsersTable


class BlogPosts(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=260)
    author = models.ForeignKey(UsersTable, on_delete=models.CASCADE)
    body = models.TextField()
    created_at = models.DateTimeField(null=False, default=datetime.now())
    edited_at = models.DateTimeField(null=False, default=datetime.now())
    is_deleted = models.BooleanField(default=False)
