from django.contrib import admin
from django.contrib.admin import AdminSite
from .models import Service, ServiceFeature, ServiceInquiry, Testimonial

# Customize admin site
admin.site.site_header = "Zylo Coroe Admin"
admin.site.site_title = "Zylo Coroe Admin Portal"
admin.site.index_title = "Welcome to Zylo Coroe Administration"


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'price_range', 'is_active', 'display_order', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['display_order', 'title']


@admin.register(ServiceFeature)
class ServiceFeatureAdmin(admin.ModelAdmin):
    list_display = ['title', 'service', 'display_order']
    list_filter = ['service']
    search_fields = ['title', 'description']
    ordering = ['service', 'display_order']


@admin.register(ServiceInquiry)
class ServiceInquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'service', 'status', 'submitted_at']
    list_filter = ['status', 'service', 'submitted_at']
    search_fields = ['name', 'email', 'phone']
    readonly_fields = ['submitted_at']
    ordering = ['-submitted_at']


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'service', 'rating', 'is_featured', 'display_order']
    list_filter = ['is_featured', 'rating', 'service']
    search_fields = ['name', 'company', 'quote']
    ordering = ['display_order', '-created_at']

