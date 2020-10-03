from django.db import models
from django_extensions.db.models import TimeStampedModel

from .constants import (
    ACRE, DISTRICTS,
    PRIMARY, BURIAL
)

# Create your models here.

class FunerarySite(TimeStampedModel):
    name = models.CharField(max_length=250, verbose_name='Nome do Sítio')

    burial_type = models.TextField(verbose_name='Tipo/número de enterramentos')

    burial = models.CharField(max_length=2, choices=BURIAL, default=PRIMARY, verbose_name='Tipo de Inumação')

    site_type = models.ForeignKey('funeral.SiteType', on_delete=models.CASCADE)

    uf = models.CharField(max_length=2, choices=DISTRICTS, default=ACRE, verbose_name='Distrito')

    county = models.CharField(max_length=250, verbose_name='Município')

    chronology = models.ForeignKey('funeral.Chronology', on_delete=models.CASCADE)

    dating = models.TextField(verbose_name='Datação')

    dated_material = models.TextField(verbose_name='Material Datado')

    references = models.ForeignKey('funeral.Reference', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Sítio Funerário'
        verbose_name_plural = 'Sítios Funerários'

    def __str__(self):
        return f'{self.name} - {self.county} ({self.uf})'


class SiteType(TimeStampedModel):
    initials = models.CharField(max_length=20, verbose_name='Tipo do Sítio')

    description = models.CharField(max_length=250, verbose_name='Descrição')

    class Meta:
        verbose_name = 'Tipo de Sítio'
        verbose_name_plural = 'Tipos de Sítios'

    def __str__(self):
        return self.initials


class Chronology(TimeStampedModel):
    name = models.CharField(max_length=250, verbose_name='Cronologia')

    class Meta:
        verbose_name = 'Cronologia'
        verbose_name_plural = 'Cronologias'

    def __str__(self):
        return self.name


class Reference(TimeStampedModel):
    name = models.CharField(max_length=250)

    class Meta:
        verbose_name = 'Referência'
        verbose_name_plural = 'Referências'

    def __str__(self):
        return self.name


class SiteImage(TimeStampedModel):
    title = models.CharField(max_length=250, verbose_name='Título')

    description = models.TextField(verbose_name='Descrição')

    src = models.ImageField(upload_to='images/')

    funeral_site = models.ForeignKey('funeral.FunerarySite', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Imagem do Sítio'
        verbose_name_plural = 'Imagens do Sítio'

    def __str__(self):
        return self.title