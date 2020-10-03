# Third Party Imports
from rest_framework import serializers

# Local Imports
from .models import FunerarySite
from .models import SiteType
from .models import Chronology
from .models import Reference
from .models import SiteImage


class FunerarySiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = FunerarySite
        fields = '__all__'


class SiteTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteType
        fields = '__all__'


class ChronologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Chronology
        fields = '__all__'


class ReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reference
        fields = '__all__'


class SiteImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteImage
        fields = '__all__'
