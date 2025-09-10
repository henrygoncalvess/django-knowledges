from django.db import models

class PostModel(models.Model):
    username = models.CharField(max_length=33)
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=1000)
    created_datetime = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
