from django.urls import path
from ...views import PostList, PostDetail

urlpatterns = [
    path('careers/', PostList.as_view(), name='list'),
    path('careers/<int:id>/', PostDetail.as_view(), name='detail'),
]
