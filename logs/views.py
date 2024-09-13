from django.core.handlers.wsgi import WSGIRequest
from django.forms.models import model_to_dict
from django.shortcuts import render, redirect
from logs.models import Logs
from django.http import JsonResponse, Http404


# Получаем все обьекты в модели Logs
def log_all(request: WSGIRequest) -> JsonResponse:
    if request.method == "GET":  # проверка на сопвадение метода
        return JsonResponse({"logs": [model_to_dict(obj) for obj in Logs.objects.all()]})  # возвращение ответа в формате JSON


# Получаем обьект по ID в модели Logs
def log_by_id(request: WSGIRequest, id: int) -> JsonResponse:
    if request.method == "GET":  # проверка на сопвадение метода
        try:
            return JsonResponse({"logs": model_to_dict(Logs.objects.get(pk=id))})  # возвращение ответа в формате JSON
        except Logs.DoesNotExist:
            return JsonResponse({"message": "not found"}, status=404)  # возврат 404 если не найдено
