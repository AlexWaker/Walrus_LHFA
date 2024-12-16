from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Image
from .ser import ImageSerializer

class ImageListView(APIView):
    def get(self, request):
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

# Create your views here.
