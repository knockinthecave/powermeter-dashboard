from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import (AirQuality,
                     HeatSmokeDetector,
                     PowerMeter1,
                     PowerMeter2,
                     PowerMeter3,
                     PowerMeter4
                     )
from rest_framework.permissions import AllowAny
from .serializers import (AirQualitySerializer,
                          HeatSmokeDetectorSerializer,
                          PowerMeter1Serializer,
                          PowerMeter2Serializer,
                          PowerMeter3Serializer,
                          PowerMeter4Serializer
                          )


class AirQualityList(APIView):
    """
    AirQuality 데이터를 조회하는 API 뷰
    """
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = AirQuality.objects.order_by('-collection_time').first()
        if queryset:
            serializer = AirQualitySerializer(queryset)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No Data Found."}, status=status.HTTP_404_NOT_FOUND)


class HeatSmokeDetectorList(APIView):
    """
    HeatSmokeDetector 데이터를 조회하는 API 뷰
    """
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = (HeatSmokeDetector
                    .objects.order_by('-collection_time')
                    .first()
                    )
        if queryset:
            serializer = HeatSmokeDetectorSerializer(queryset)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No Data Found."}, status=status.HTTP_404_NOT_FOUND)


class PowerMeter1List(APIView):
    """
    PowerMeter1 데이터를 조회하는 API 뷰
    """
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = PowerMeter1.objects.order_by('-collection_time').first()
        if queryset:
            serializer = PowerMeter1Serializer(queryset)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No Data Found."}, status=status.HTTP_404_NOT_FOUND)


class PowerMeter2List(APIView):
    """
    PowerMeter2 데이터를 조회하는 API 뷰
    """
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = PowerMeter2.objects.order_by('-collection_time').first()
        if queryset:
            serializer = PowerMeter2Serializer(queryset)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No Data Found."}, status=status.HTTP_404_NOT_FOUND)


class PowerMeter3List(APIView):
    """
    PowerMeter3 데이터를 조회하는 API 뷰
    """
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = PowerMeter3.objects.order_by('-collection_time').first()
        if queryset:
            serializer = PowerMeter3Serializer(queryset)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No Data Found."}, status=status.HTTP_404_NOT_FOUND)


class PowerMeter4List(APIView):
    """
    PowerMeter4 데이터를 조회하는 API 뷰
    """
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = PowerMeter4.objects.order_by('-collection_time').first()
        if queryset:
            serializer = PowerMeter4Serializer(queryset)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"No Data Found."}, status=status.HTTP_404_NOT_FOUND)
