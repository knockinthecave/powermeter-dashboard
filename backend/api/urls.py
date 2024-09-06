from django.urls import path
from .views import (
    AirQualityList,
    HeatSmokeDetectorList,
    PowerMeter1List,
    PowerMeter2List,
    PowerMeter3List,
    PowerMeter4List
    )

urlpatterns = [
    path('airquality/', AirQualityList.as_view(), name='airquality-list'),
    path('heat-smoke/',
         HeatSmokeDetectorList.as_view(),
         name='heat-smoke-list'),
    path('powermeter1/', PowerMeter1List.as_view(), name='powermeter1-list'),
    path('powermeter2/', PowerMeter2List.as_view(), name='powermeter2-list'),
    path('powermeter3/', PowerMeter3List.as_view(), name='powermeter3-list'),
    path('powermeter4/', PowerMeter4List.as_view(), name='powermeter4-list'),
]
