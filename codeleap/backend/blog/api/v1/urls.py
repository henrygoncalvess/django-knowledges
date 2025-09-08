from django.urls import path
from ... import views

urlpatterns = [
    path('posts/', views.posts_list_handler, name='list'),
    path('posts/<int:id>/', views.posts_update_handler, name='update'),
]
