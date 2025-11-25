from django.db import models
from django.core.validators import MinValueValidator


class Service(models.Model):
    """Model for services offered by Zylo Coroe"""
    SERVICE_ICONS = [
        ('code', 'Code'),
        ('smartphone', 'Smartphone'),
        ('palette', 'Palette'),
        ('shopping-cart', 'Shopping Cart'),
        ('bot', 'Bot'),
        ('database', 'Database'),
        ('cloud', 'Cloud'),
        ('shield', 'Shield'),
    ]
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    short_description = models.CharField(max_length=300, help_text="Short description for cards")
    icon = models.CharField(max_length=50, choices=SERVICE_ICONS, default='code')
    price_starting_from = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(0)],
        help_text="Starting price in USD"
    )
    price_range = models.CharField(
        max_length=100, 
        help_text="e.g., '$5,000 - $50,000' or 'Custom Quote'",
        default='Custom Quote'
    )
    is_active = models.BooleanField(default=True)
    display_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['display_order', 'title']
    
    def __str__(self):
        return self.title


class ServiceFeature(models.Model):
    """Features and benefits for each service"""
    service = models.ForeignKey(Service, related_name='features', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    display_order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['display_order']
    
    def __str__(self):
        return f"{self.service.title} - {self.title}"


class ServiceInquiry(models.Model):
    """Model for service inquiry form submissions"""
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('quoted', 'Quoted'),
        ('closed', 'Closed'),
    ]
    
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    custom_requirements = models.TextField(blank=True, help_text="Optional custom requirements or notes")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    submitted_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True, help_text="Internal notes")
    
    class Meta:
        ordering = ['-submitted_at']
        verbose_name_plural = 'Service Inquiries'
    
    def __str__(self):
        return f"Inquiry from {self.name} - {self.service.title if self.service else 'General'}"


class Testimonial(models.Model):
    """Client testimonials/reviews"""
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    quote = models.TextField()
    service = models.ForeignKey(
        Service, 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True,
        help_text="Related service (optional)"
    )
    rating = models.IntegerField(
        default=5,
        help_text="Rating out of 5"
    )
    is_featured = models.BooleanField(default=False)
    display_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['display_order', '-created_at']
    
    def __str__(self):
        return f"Testimonial from {self.name}"

