import uuid
from datetime import datetime
from django.db import models

# Create your models here.
class Task(models.Model):
    id = models.UUIDField(
         primary_key = True,
         default = uuid.uuid4,
         editable = False)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.utcnow)

    def __str__(self):
        return str(self.title)
