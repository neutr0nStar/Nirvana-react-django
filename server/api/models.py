from django.db import models

# Create your models here.

class Place(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    picture = models.ImageField(upload_to='places')

    def __str__(self) -> str:
        return self.name
