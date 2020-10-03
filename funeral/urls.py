# Django Imports
from django.conf.urls import include
from django.conf.urls import url

# Third Party Imports
from rest_framework import routers

# Local Imports
from .api import FunerarySiteViewSet
from .api import SiteTypeViewSet
from .api import ChronologyViewSet
from .api import ReferenceViewSet


router = routers.DefaultRouter(trailing_slash=False)
router.register(r'funeral-sites', FunerarySiteViewSet, 'funeral-sites')
router.register(r'site-types', SiteTypeViewSet, 'site-types')
router.register(r'chronology', ChronologyViewSet, 'chronology')
router.register(r'references', ReferenceViewSet, 'references')

urlpatterns = [
    url(r'^', include(router.urls))
]
