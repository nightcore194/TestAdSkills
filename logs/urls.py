from django.urls import path

from . import views

urlpatterns = [
    path("logs/", views.log_all, name="log"),
    path("logs/<int:id>/", views.log_by_id, name="log"),
]