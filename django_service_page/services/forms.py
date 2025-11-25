from django import forms
from .models import ServiceInquiry, Service


class ServiceInquiryForm(forms.ModelForm):
    """Form for service inquiry submissions"""
    service = forms.ModelChoiceField(
        queryset=Service.objects.filter(is_active=True),
        required=True,
        widget=forms.Select(attrs={
            'class': 'form-select',
            'id': 'service-select',
        }),
        empty_label="Select a service..."
    )
    
    name = forms.CharField(
        max_length=200,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Your full name',
            'required': True,
        })
    )
    
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': 'your.email@example.com',
            'required': True,
        })
    )
    
    phone = forms.CharField(
        max_length=20,
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': '+1 (555) 123-4567',
        })
    )
    
    custom_requirements = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'rows': 4,
            'placeholder': 'Tell us about your project requirements, timeline, budget, or any specific needs...',
        })
    )
    
    class Meta:
        model = ServiceInquiry
        fields = ['service', 'name', 'email', 'phone', 'custom_requirements']

