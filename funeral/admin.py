# Register your models here.
from django.contrib import admin

from .models import (
    FunerarySite,
    SiteType,
    Chronology,
    Reference,
    SiteImage
)

from .forms import SiteImageAdminForm

class InlineSiteImageAdmin(admin.StackedInline):
    model = SiteImage
    form = SiteImageAdminForm
    extra = 1

class FunerarySiteAdmin(admin.ModelAdmin):
    model = FunerarySite
    inlines = [InlineSiteImageAdmin]
    list_display = ['name', 'county', 'uf']
    list_filter = ['county', 'uf']
    search_fields = ['name',]

class SiteTypeAdmin(admin.ModelAdmin):
    model = SiteType

class ChronologyAdmin(admin.ModelAdmin):
    model = Chronology

class ReferenceAdmin(admin.ModelAdmin):
    model = Reference

class SiteImageAdmin(admin.ModelAdmin):
    model = SiteImage

admin.site.register(FunerarySite, FunerarySiteAdmin)
admin.site.register(SiteType, SiteTypeAdmin)
admin.site.register(Chronology, ChronologyAdmin)
admin.site.register(Reference, ReferenceAdmin)
admin.site.register(SiteImage, SiteImageAdmin)
