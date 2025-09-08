from django.shortcuts import render, redirect, get_object_or_404
from .forms import FormTask
from django.http import HttpRequest
from .models import TaskModel

def homeHandler(request:HttpRequest):
    context = {
        'name': 'henry',
        "tasks": TaskModel.objects.all() 
    }

    return render(request, 'home.html', context)

def addTaskHandler(request:HttpRequest):
    if request.method == 'POST':
        form = FormTask(request.POST)

        if form.is_valid():
            form.save()
            return redirect('tasks:home')
        
    context = {
        'form': FormTask
    }

    return render(request, 'add.html', context)

def deleteTaskHandler(request:HttpRequest, id):
    task = get_object_or_404(TaskModel, id=id)
    task.delete()

    return redirect('tasks:home')

def updateTaskHandler(request:HttpRequest, id):
    task = get_object_or_404(TaskModel, id=id)

    if request.method == 'POST':
        form = FormTask(request.POST, instance=task)

        if form.is_valid():
            form.save()
            return redirect('tasks:home')

    form = FormTask(instance=task)

    context = {
        'form':form
    }

    return render(request, 'update.html', context)
