from django.db import models
from django.contrib.auth.models import User

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


# Create your models here.

class Place(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    picture = models.ImageField(upload_to='places')

    def __str__(self) -> str:
        return self.name

class Package(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    destination = models.ForeignKey(Place, on_delete=models.CASCADE)
    no_of_people = models.IntegerField()
    no_of_days = models.IntegerField()
    price = models.IntegerField()

    def __str__(self) -> str:
        return f"{self.owner} {self.destination.name}"


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)