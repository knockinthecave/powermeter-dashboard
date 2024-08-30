from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import AirQuality
from rest_framework.permissions import AllowAny
from .serializers import AirQualitySerializer


class AirQualityList(APIView):
    """
    AirQuality 데이터를 조회하는 API 뷰
    """

    permission_classes = [AllowAny]

    def get(self, request, format=None):

        air_quality = AirQuality.objects.all()
        serializer = AirQualitySerializer(air_quality, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
