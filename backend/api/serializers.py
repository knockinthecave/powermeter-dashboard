from rest_framework import serializers
from .models import (
    AirQuality,
    PowerMeter1,
    PowerMeter2,
    PowerMeter3,
    PowerMeter4,
    HeatSmokeDetector,
    Digitalmultimeter
)


class AirQualitySerializer(serializers.ModelSerializer):
    class Meta:
        model = AirQuality
        fields = '__all__'


class PowerMeter1Serializer(serializers.ModelSerializer):
    class Meta:
        model = PowerMeter1
        fields = '__all__'


class PowerMeter2Serializer(serializers.ModelSerializer):
    class Meta:
        model = PowerMeter2
        fields = '__all__'


class PowerMeter3Serializer(serializers.ModelSerializer):
    class Meta:
        model = PowerMeter3
        fields = '__all__'


class PowerMeter4Serializer(serializers.ModelSerializer):
    class Meta:
        model = PowerMeter4
        fields = '__all__'


class HeatSmokeDetectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeatSmokeDetector
        fields = '__all__'


class DigitalmultimeterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Digitalmultimeter
        fields = '__all__'
