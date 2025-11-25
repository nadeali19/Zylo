from django.urls import path
from . import views

urlpatterns = [
    path('', views.service_page, name='service_page'),
    path('submit-inquiry/', views.submit_inquiry, name='submit_inquiry'),
    path('api/service/<int:service_id>/price/', views.get_service_price, name='get_service_price'),
]

