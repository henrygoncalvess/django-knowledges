from django import forms
from .models import TaskModel

class FormTask(forms.ModelForm):
    class Meta:
        model = TaskModel
        fields = ['name', 'description', 'complete']
