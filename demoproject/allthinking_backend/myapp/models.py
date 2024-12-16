from django.db import models

class Image(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()

    def __str__(self):
        return self.title
