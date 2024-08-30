from django.db import models


class AirQuality(models.Model):
    idx = models.AutoField(primary_key=True)
    pm10 = models.IntegerField(blank=True, null=True)
    pm25 = models.IntegerField(blank=True, null=True)
    co2 = models.FloatField(blank=True, null=True)
    temperature = models.FloatField(blank=True, null=True)
    humidity = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'air_quality'
