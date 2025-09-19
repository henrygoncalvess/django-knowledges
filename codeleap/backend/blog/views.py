from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostSerializer
from .models import PostModel

class PostList(APIView):
    def get(self, request, format=None):
        posts = PostModel.objects.all().order_by("-created_datetime")
        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
      
class PostDetail(APIView):
    def patch(self, request, id, format=None):
        post = get_object_or_404(PostModel, id=id)
        serializer = PostSerializer(post, data = request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        post = get_object_or_404(PostModel, id=id)
        post.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
