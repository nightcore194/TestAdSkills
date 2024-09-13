import datetime
from django.db import models

# Create your models here.

class Logs(models.Model):
    timestamp = models.DateTimeField(default=datetime.datetime.now())
    computer_name = models.CharField(null=False, max_length=255)
    event_type = models.CharField(null=False, max_length=64)
    application = models.CharField(null=False, max_length=64)
    window_title = models.CharField(null=False, max_length=64)
    content = models.CharField(null=False, max_length=64)
    screenshot_url = models.CharField(null=False, max_length=255)
