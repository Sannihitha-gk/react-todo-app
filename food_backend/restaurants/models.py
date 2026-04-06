from django.db import models
class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.name
class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.name
