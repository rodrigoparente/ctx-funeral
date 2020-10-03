from django import forms

from .models import SiteImage

class SiteImageAdminForm(forms.ModelForm):
    class Meta:
        model = SiteImage
        fields = '__all__'