from django.urls import path
from . import views

app_name = 'tasks'

urlpatterns = [
    path('', views.homeHandler, name='home'),
    path('add/', views.addTaskHandler, name='add'),
    path('delete/<int:id>', views.deleteTaskHandler, name='delete'),
    path('update/<int:id>', views.updateTaskHandler, name='update'),
]
