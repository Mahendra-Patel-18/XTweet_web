from django.urls import path
from .import views

urlpatterns = [
    path('', views.xtweet_list, name='xtweet_list'),
    path('create/', views.xtweet_create, name='xtweet_create'),
    path('<int:xtweet_id>/edit/', views.xtweet_edit, name='xtweet_edit'),
    path('<int:xtweet_id>/delete/', views.xtweet_delete, name='xtweet_delete'),
    path('register/', views.register, name='register'),
    path('search/', views.search_results, name='search_results'),

]
