from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Service, ServiceFeature, Testimonial
from .forms import ServiceInquiryForm


def service_page(request):
    """Main service page view"""
    services = Service.objects.filter(is_active=True)
    testimonials = Testimonial.objects.filter(is_featured=True)[:6]
    
    # Get features for each service
    services_with_features = []
    for service in services:
        features = ServiceFeature.objects.filter(service=service)
        services_with_features.append({
            'service': service,
            'features': features
        })
    
    context = {
        'services': services,
        'services_with_features': services_with_features,
        'testimonials': testimonials,
        'form': ServiceInquiryForm(),
    }
    
    return render(request, 'services/service_page.html', context)


@require_http_methods(["POST"])
def submit_inquiry(request):
    """Handle service inquiry form submission"""
    form = ServiceInquiryForm(request.POST)
    
    if form.is_valid():
        inquiry = form.save()
        
        # Send email notification to admin
        try:
            service_name = inquiry.service.title if inquiry.service else "General Inquiry"
            subject = f'New Service Inquiry: {service_name}'
            message = f"""
New service inquiry received:

Name: {inquiry.name}
Email: {inquiry.email}
Phone: {inquiry.phone or 'Not provided'}
Service: {service_name}
Price Range: {inquiry.service.price_range if inquiry.service else 'N/A'}

Custom Requirements:
{inquiry.custom_requirements or 'None provided'}

Submitted at: {inquiry.submitted_at.strftime('%Y-%m-%d %H:%M:%S')}

You can view this inquiry in the admin panel.
"""
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.ADMIN_EMAIL],
                fail_silently=False,
            )
        except Exception as e:
            # Log error but don't fail the form submission
            print(f"Error sending email: {e}")
        
        messages.success(request, 'Thank you! Your inquiry has been submitted successfully. We will contact you soon.')
        
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            return JsonResponse({
                'success': True,
                'message': 'Thank you! Your inquiry has been submitted successfully.'
            })
        
        return redirect('service_page')
    else:
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            return JsonResponse({
                'success': False,
                'errors': form.errors
            }, status=400)
        
        messages.error(request, 'Please correct the errors below.')
        services = Service.objects.filter(is_active=True)
        testimonials = Testimonial.objects.filter(is_featured=True)[:6]
        services_with_features = []
        for service in services:
            features = ServiceFeature.objects.filter(service=service)
            services_with_features.append({
                'service': service,
                'features': features
            })
        
        context = {
            'services': services,
            'services_with_features': services_with_features,
            'testimonials': testimonials,
            'form': form,
        }
        return render(request, 'services/service_page.html', context)


def get_service_price(request, service_id):
    """API endpoint to get service price dynamically"""
    try:
        service = Service.objects.get(id=service_id, is_active=True)
        return JsonResponse({
            'success': True,
            'price_range': service.price_range,
            'price_starting_from': str(service.price_starting_from),
        })
    except Service.DoesNotExist:
        return JsonResponse({
            'success': False,
            'error': 'Service not found'
        }, status=404)

