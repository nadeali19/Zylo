from django.core.management.base import BaseCommand
from services.models import Service, ServiceFeature, Testimonial


class Command(BaseCommand):
    help = 'Creates initial data for services, features, and testimonials'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Creating initial data...'))

        # Create Services
        services_data = [
            {
                'title': 'Web Development',
                'slug': 'web-development',
                'description': 'Scalable, high-performance web applications built with modern frameworks like React, Django, and Next.js. We create responsive, fast-loading websites that provide exceptional user experiences.',
                'short_description': 'Scalable, high-performance web applications built with modern frameworks like React, Django, and Next.js.',
                'icon': 'code',
                'price_starting_from': 5000.00,
                'price_range': '$5,000 - $50,000',
                'display_order': 1,
            },
            {
                'title': 'App Development',
                'slug': 'app-development',
                'description': 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android. From concept to deployment, we build apps that users love.',
                'short_description': 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
                'icon': 'smartphone',
                'price_starting_from': 8000.00,
                'price_range': '$8,000 - $80,000',
                'display_order': 2,
            },
            {
                'title': 'UI/UX Design',
                'slug': 'ui-ux-design',
                'description': 'User-centric design processes ensuring intuitive interfaces and engaging visual journeys for your customers. We combine aesthetics with functionality.',
                'short_description': 'User-centric design processes ensuring intuitive interfaces and engaging visual journeys for your customers.',
                'icon': 'palette',
                'price_starting_from': 3000.00,
                'price_range': '$3,000 - $30,000',
                'display_order': 3,
            },
            {
                'title': 'E-commerce Solutions',
                'slug': 'ecommerce-solutions',
                'description': 'Robust online stores with secure payment gateways, inventory management, and optimized checkout flows. Boost your sales with our e-commerce expertise.',
                'short_description': 'Robust online stores with secure payment gateways, inventory management, and optimized checkout flows.',
                'icon': 'shopping-cart',
                'price_starting_from': 10000.00,
                'price_range': '$10,000 - $100,000',
                'display_order': 4,
            },
            {
                'title': 'Chatbot Development',
                'slug': 'chatbot-development',
                'description': 'AI-powered conversational agents that automate support and enhance customer engagement 24/7. Reduce response time and improve customer satisfaction.',
                'short_description': 'AI-powered conversational agents that automate support and enhance customer engagement 24/7.',
                'icon': 'bot',
                'price_starting_from': 4000.00,
                'price_range': '$4,000 - $40,000',
                'display_order': 5,
            },
            {
                'title': 'Data Science',
                'slug': 'data-science',
                'description': 'Advanced analytics, machine learning models, and big data solutions to drive data-informed decisions. Turn your data into actionable insights.',
                'short_description': 'Advanced analytics, machine learning models, and big data solutions to drive data-informed decisions.',
                'icon': 'database',
                'price_starting_from': 12000.00,
                'price_range': '$12,000 - $120,000',
                'display_order': 6,
            },
        ]

        for service_data in services_data:
            service, created = Service.objects.get_or_create(
                slug=service_data['slug'],
                defaults=service_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created service: {service.title}'))
            else:
                self.stdout.write(self.style.WARNING(f'Service already exists: {service.title}'))

        # Create Service Features
        web_dev = Service.objects.get(slug='web-development')
        features_data = [
            {
                'service': web_dev,
                'title': 'Responsive Design',
                'description': 'Mobile-first approach ensuring your website looks perfect on all devices.',
                'display_order': 1,
            },
            {
                'service': web_dev,
                'title': 'Fast Performance',
                'description': 'Optimized code and assets for lightning-fast load times.',
                'display_order': 2,
            },
            {
                'service': web_dev,
                'title': 'SEO Optimized',
                'description': 'Built with SEO best practices to improve search engine rankings.',
                'display_order': 3,
            },
        ]

        for feature_data in features_data:
            feature, created = ServiceFeature.objects.get_or_create(
                service=feature_data['service'],
                title=feature_data['title'],
                defaults=feature_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created feature: {feature.title}'))

        app_dev = Service.objects.get(slug='app-development')
        app_features = [
            {
                'service': app_dev,
                'title': 'Native Performance',
                'description': 'Full access to device features and optimal performance.',
                'display_order': 1,
            },
            {
                'service': app_dev,
                'title': 'Cross-Platform',
                'description': 'Build once, deploy to iOS and Android simultaneously.',
                'display_order': 2,
            },
            {
                'service': app_dev,
                'title': 'App Store Optimization',
                'description': 'Expert guidance for app store submission and optimization.',
                'display_order': 3,
            },
        ]

        for feature_data in app_features:
            feature, created = ServiceFeature.objects.get_or_create(
                service=feature_data['service'],
                title=feature_data['title'],
                defaults=feature_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created feature: {feature.title}'))

        # Create Testimonials
        testimonials_data = [
            {
                'name': 'Sarah Johnson',
                'role': 'CTO',
                'company': 'TechFlow Inc.',
                'quote': 'Zylo Coroe transformed our legacy system into a modern, high-speed platform. Their attention to detail is unmatched.',
                'service': web_dev,
                'rating': 5,
                'is_featured': True,
                'display_order': 1,
            },
            {
                'name': 'Michael Chen',
                'role': 'Founder',
                'company': 'StartUp Vision',
                'quote': 'The UI/UX team completely captured our brand essence. User engagement has increased by 40% since launch.',
                'service': Service.objects.get(slug='ui-ux-design'),
                'rating': 5,
                'is_featured': True,
                'display_order': 2,
            },
            {
                'name': 'Emily Rodriguez',
                'role': 'CEO',
                'company': 'EcoMarket',
                'quote': 'Our e-commerce platform exceeded expectations. Sales have doubled since going live. Highly recommend!',
                'service': Service.objects.get(slug='ecommerce-solutions'),
                'rating': 5,
                'is_featured': True,
                'display_order': 3,
            },
            {
                'name': 'David Kim',
                'role': 'Product Manager',
                'company': 'DataDrive Solutions',
                'quote': 'The data science team helped us uncover insights we never knew existed. Game-changing analytics!',
                'service': Service.objects.get(slug='data-science'),
                'rating': 5,
                'is_featured': True,
                'display_order': 4,
            },
        ]

        for testimonial_data in testimonials_data:
            testimonial, created = Testimonial.objects.get_or_create(
                name=testimonial_data['name'],
                company=testimonial_data['company'],
                defaults=testimonial_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created testimonial: {testimonial.name}'))

        self.stdout.write(self.style.SUCCESS('\nInitial data created successfully!'))

