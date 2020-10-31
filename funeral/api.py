
# Third Party Imports
from rest_framework import viewsets

# Local Imports
from .models import FunerarySite
from .models import SiteType
from .models import Chronology
from .models import Reference
from .models import SiteImage
from .serializers import FunerarySiteSerializer
from .serializers import FunerarySiteListSerializer
from .serializers import SiteTypeSerializer
from .serializers import ChronologySerializer
from .serializers import ReferenceSerializer
from .serializers import SiteImageSerializer
from .filters import FunerarySiteFilterSet


class FunerarySiteViewSet(viewsets.ModelViewSet):
    queryset = FunerarySite.objects.all()
    serializer_class = FunerarySiteSerializer
    filter_class = FunerarySiteFilterSet

    def get_serializer_class(self):
        if self.action in ['list']:
            return FunerarySiteListSerializer
        return super().get_serializer_class()


class SiteTypeViewSet(viewsets.ModelViewSet):
    queryset = SiteType.objects.all()
    serializer_class = SiteTypeSerializer


class ChronologyViewSet(viewsets.ModelViewSet):
    queryset = Chronology.objects.all()
    serializer_class = ChronologySerializer


class ReferenceViewSet(viewsets.ModelViewSet):
    queryset = Reference.objects.all()
    serializer_class = ReferenceSerializer


class SiteImageViewSet(viewsets.ModelViewSet):
    queryset = SiteImage.objects.all()
    serializer_class = SiteImageSerializer
