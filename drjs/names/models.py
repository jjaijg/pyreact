from django.db import models

# Create your models here.
class Name(models.Model):
    name = models.CharField(max_length=100)
    shop_name = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
