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


class FunerarySiteListSerializer(serializers.ModelSerializer):
    site_type = serializers.SerializerMethodField()

    chronology = serializers.SerializerMethodField()

    references = serializers.SerializerMethodField()

    class Meta:
        model = FunerarySite
        fields = '__all__'

    def get_site_type(self, obj):
        return obj.site_type.initials

    def get_chronology(self, obj):
        return obj.chronology.name

    def get_references(self, obj):
        return obj.references.name


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
