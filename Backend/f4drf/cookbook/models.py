from multiprocessing import context
from unicodedata import name
from django.db import models



class Recipy(models.Model):
    name = models.CharField(max_length=100)
    context = models.CharField(max_length=1023, blank=True)
    picture = models.ImageField(blank=True, upload_to='cookbook/media')
    def __str__(self) -> str:
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)
    about = models.CharField(max_length=1023)
    recipy = models.ManyToManyField(Recipy)
    def __str__(self) -> str:
        return self.name