from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from .models import (AirQuality,
                     HeatSmokeDetector,
                     PowerMeter1,
                     PowerMeter2,
                     PowerMeter3,
                     PowerMeter4
                     )
from django.utils import timezone


class AirQualityTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        # 테스트 데이터를 생성합니다.
        AirQuality.objects.create(
             pm10=50,
             pm25=25,
             co2=500,
             temperature=25,
             humidity=50,
             collection_time=timezone.now()
             )

    def test_airquality_get(self):
        url = reverse('airquality-list')  # URL 패턴에 맞는 이름을 설정해야 함
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('pm10', response.data)
        self.assertIn('pm25', response.data)
        self.assertIn('co2', response.data)
        self.assertIn('temperature', response.data)
        self.assertIn('humidity', response.data)
        self.assertIn('collection_time', response.data)


class HeatSmokeDetectorTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        HeatSmokeDetector.objects.create(
             temperature=26.8,
             humidity=46.4,
             running_check='정상',
             smoke_check='미감지',
             temperature_warning='미발생',
             temperature_alarm='미발생',
             collection_time=timezone.now()
          )

# 연기센서 데이터는 아직 안받아와지므로 404 떠야 Test 통과
    def test_heatsmokedetector_get(self):
        url = reverse('heat-smoke-list')  # URL 패턴에 맞는 이름을 설정해야 함
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('temperature', response.data)
        self.assertIn('humidity', response.data)
        self.assertIn('running_check', response.data)
        self.assertIn('smoke_check', response.data)
        self.assertIn('temperature_warning', response.data)
        self.assertIn('temperature_alarm', response.data)
        self.assertIn('collection_time', response.data)


class PowerMeter1Tests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        PowerMeter1.objects.create(
             effectiveEnergy=1000,
             reactiveEnergy=200,
             voltageR=220,
             voltageS=220,
             voltageT=220,
             currentR=10,
             currentS=10,
             currentT=10,
             activePower=500,
             reactivePower=100,
             collection_time=timezone.now()
             )

    def test_powermeter1_get(self):
        url = reverse('powermeter1-list')  # URL 패턴에 맞는 이름을 설정해야 함
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('effectiveEnergy', response.data)
        self.assertIn('reactiveEnergy', response.data)
        self.assertIn('reactivePower', response.data)


class PowerMeter2Tests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        PowerMeter2.objects.create(
             effectiveEnergy=1000,
             reactiveEnergy=200,
             voltageR=220,
             voltageS=220,
             voltageT=220,
             currentR=10,
             currentS=10,
             currentT=10,
             activePower=500,
             reactivePower=100,
             collection_time=timezone.now()
             )

    def test_powermeter2_get(self):
        url = reverse('powermeter2-list')  # URL 패턴에 맞는 이름을 설정해야 함
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('effectiveEnergy', response.data)
        self.assertIn('reactiveEnergy', response.data)
        self.assertIn('reactivePower', response.data)


class PowerMeter3Tests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        PowerMeter3.objects.create(
             effectiveEnergy=1000,
             reactiveEnergy=200,
             voltageR=220,
             voltageS=220,
             voltageT=220,
             currentR=10,
             currentS=10,
             currentT=10,
             activePower=500,
             reactivePower=100,
             collection_time=timezone.now()
             )

    def test_powermeter3_get(self):
        url = reverse('powermeter3-list')  # URL 패턴에 맞는 이름을 설정해야 함
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('effectiveEnergy', response.data)
        self.assertIn('reactiveEnergy', response.data)
        self.assertIn('reactivePower', response.data)


class PowerMeter4Tests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        PowerMeter4.objects.create(
             effectiveEnergy=1000,
             reactiveEnergy=200,
             voltageR=220,
             voltageS=220,
             voltageT=220,
             currentR=10,
             currentS=10,
             currentT=10,
             activePower=500,
             reactivePower=100,
             collection_time=timezone.now()
             )

    def test_powermeter4_get(self):
        url = reverse('powermeter4-list')  # URL 패턴에 맞는 이름을 설정해야 함
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('effectiveEnergy', response.data)
        self.assertIn('reactiveEnergy', response.data)
        self.assertIn('reactivePower', response.data)
