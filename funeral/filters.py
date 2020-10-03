# Django Imports
from django_filters import FilterSet

# Local Imports
from .models import FunerarySite


class FunerarySiteFilterSet(FilterSet):
    class Meta:
        model = FunerarySite
        fields = (
            'site_type',
            'chronology',
            'references'
        )
