from django.db import models


class AirQuality(models.Model):
    idx = models.AutoField(primary_key=True)
    pm10 = models.FloatField()
    pm25 = models.FloatField()
    co2 = models.FloatField()
    temperature = models.FloatField()
    humidity = models.FloatField()
    collection_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "AirQuality"


class HeatSmokeDetector(models.Model):
    idx = models.AutoField(primary_key=True)
    temperature = models.FloatField()
    humidity = models.FloatField()
    smoke_level = models.IntegerField()
    collection_time = models.DateTimeField()

    class Meta:
        # managed = False
        db_table = "HeatSmokeDetector"


class PowerMeter1(models.Model):
    idx = models.AutoField(primary_key=True)
    effectiveEnergy = models.IntegerField()
    reactiveEnergy = models.IntegerField()
    voltageR = models.FloatField()
    voltageS = models.FloatField()
    voltageT = models.FloatField()
    currentR = models.FloatField()
    currentS = models.FloatField()
    currentT = models.FloatField()
    activePower = models.IntegerField()
    reactivePower = models.IntegerField()
    collection_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "PowerMeter1"


class PowerMeter2(models.Model):
    idx = models.AutoField(primary_key=True)
    effectiveEnergy = models.IntegerField()
    reactiveEnergy = models.IntegerField()
    voltageR = models.FloatField()
    voltageS = models.FloatField()
    voltageT = models.FloatField()
    currentR = models.FloatField()
    currentS = models.FloatField()
    currentT = models.FloatField()
    activePower = models.IntegerField()
    reactivePower = models.IntegerField()
    collection_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "PowerMeter2"


class PowerMeter3(models.Model):
    idx = models.AutoField(primary_key=True)
    effectiveEnergy = models.IntegerField()
    reactiveEnergy = models.IntegerField()
    voltageR = models.FloatField()
    voltageS = models.FloatField()
    voltageT = models.FloatField()
    currentR = models.FloatField()
    currentS = models.FloatField()
    currentT = models.FloatField()
    activePower = models.IntegerField()
    reactivePower = models.IntegerField()
    collection_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "PowerMeter3"


class PowerMeter4(models.Model):
    idx = models.AutoField(primary_key=True)
    effectiveEnergy = models.IntegerField()
    reactiveEnergy = models.IntegerField()
    voltageR = models.FloatField()
    voltageS = models.FloatField()
    voltageT = models.FloatField()
    currentR = models.FloatField()
    currentS = models.FloatField()
    currentT = models.FloatField()
    activePower = models.IntegerField()
    reactivePower = models.IntegerField()
    collection_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "PowerMeter4"
