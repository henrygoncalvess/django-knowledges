from django.urls import path
from ... import views

urlpatterns = [
    path('careers/', views.posts_list_handler, name='list'),
    path('careers/<int:id>/', views.posts_update_handler, name='update'),
]
