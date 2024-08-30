from django.urls import path
from .views import AirQualityList

urlpatterns = [
    path('airquality/', AirQualityList.as_view(), name='airquality-list'),
]
