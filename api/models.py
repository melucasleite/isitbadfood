from distutils.command.upload import upload
from django.db import models

class Food(models.Model):
    name = models.TextField()
    image = models.FileField()
    is_bad_food = models.BooleanField(default=False)
