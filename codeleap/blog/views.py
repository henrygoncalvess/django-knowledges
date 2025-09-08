from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostSerializer
from .models import PostModel

@api_view(['GET', 'POST'])
def posts_list_handler(request):
    match request.method:
        case 'GET':
            posts = PostModel.objects.all()
            serializer = PostSerializer(posts, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        case 'POST':
            serializer = PostSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        case _:
            return Response({"detail": "Método não permitido"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)



@api_view(['PATCH', 'DELETE'])
def posts_update_handler(request, id):
    match request.method:
        case 'PATCH':
            post = get_object_or_404(PostModel, id=id)
            serializer = PostSerializer(post, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        case 'DELETE':
            post = get_object_or_404(PostModel, id=id)
            post.delete()

            return Response()
        case _:
            return Response({"detail": "Método não permitido"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
