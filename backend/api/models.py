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


class HeatSmokeDetector(models.Model):
    idx = models.AutoField(primary_key=True)
    temperature = models.FloatField(blank=True, null=True)
    humidity = models.FloatField(blank=True, null=True)
    running_check = models.CharField(max_length=100, blank=True, null=True)
    smoke_check = models.CharField(max_length=100, blank=True, null=True)
    temperature_warning = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )
    temperature_alarm = models.CharField(max_length=100, blank=True, null=True)
    collection_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'HeatSmokeDetector'


class Digitalmultimeter(models.Model):
    idx = models.AutoField(primary_key=True)
    voltage = models.FloatField(blank=True, null=True)
    current = models.FloatField(blank=True, null=True)
    effectiveenergy = models.IntegerField(
        db_column='effectiveEnergy',
        blank=True,
        null=True)
    reactiveenergy = models.IntegerField(
        db_column='reactiveEnergy',
        blank=True,
        null=True)  # Field name made lowercase.
    apparentpower = models.IntegerField(
        db_column='apparentPower',
        blank=True,
        null=True)  # Field name made lowercase.
    powerfactor = models.FloatField(
        db_column='powerFactor',
        blank=True,
        null=True)  # Field name made lowercase.
    frequency = models.FloatField(blank=True, null=True)
    harmonics = models.FloatField(blank=True, null=True)
    temperature = models.FloatField(blank=True, null=True)
    activepower = models.DecimalField(
        db_column='activePower',
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )
    collection_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'DigitalMultiMeter'
