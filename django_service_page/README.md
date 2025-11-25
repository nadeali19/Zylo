# Zylo Coroe - Service Page (Django)

A modern, responsive Service Page for Zylo Coroe software house built with Django. Features a beautiful dark blue and light grey design with smooth animations and interactive elements.

## Features

- ✅ **Hero Section** - Animated header with engaging description
- ✅ **Services List** - Showcase all services with icons, descriptions, and hover animations
- ✅ **Features & Benefits** - Highlight advantages of each service in animated cards
- ✅ **Dynamic Inquiry Form** - Form with dynamic service selection and pricing display
- ✅ **Email Notifications** - Automatic email notifications to admin on form submission
- ✅ **Testimonials/Reviews** - Animated client feedback section
- ✅ **Call-to-Action** - Multiple CTAs encouraging user engagement
- ✅ **Fully Responsive** - Mobile-first responsive design
- ✅ **Smooth Animations** - Fade-ins, hover effects, and smooth scrolling

## Design

- **Color Scheme**: Dark Blue (#14213d) and Light Grey (#e5e5e5)
- **Framework**: Django 5.0+
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Animations**: CSS animations with Intersection Observer API

## Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Setup Steps

1. **Navigate to the project directory:**
   ```bash
   cd django_service_page
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser (for admin access):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Load initial data (optional):**
   ```bash
   python manage.py loaddata initial_data.json
   ```
   Or use the management command:
   ```bash
   python manage.py create_initial_data
   ```

7. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

8. **Access the application:**
   - Service Page: http://127.0.0.1:8000/
   - Admin Panel: http://127.0.0.1:8000/admin/

## Email Configuration

To enable email notifications, configure the following environment variables or update `settings.py`:

```bash
export EMAIL_HOST_USER='your-email@gmail.com'
export EMAIL_HOST_PASSWORD='your-app-password'
export DEFAULT_FROM_EMAIL='noreply@zylocoroe.com'
export ADMIN_EMAIL='admin@zylocoroe.com'
```

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password as `EMAIL_HOST_PASSWORD`

## Admin Panel

Access the admin panel at `/admin/` to:
- Manage Services
- Add/Edit Service Features
- View and manage Service Inquiries
- Add/Edit Testimonials

## Project Structure

```
django_service_page/
├── manage.py
├── requirements.txt
├── zylo_coroe/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── services/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   └── urls.py
├── templates/
│   ├── base.html
│   └── services/
│       └── service_page.html
└── static/
    ├── css/
    └── js/
```

## Customization

### Adding New Services

1. Go to Admin Panel → Services → Add Service
2. Fill in the service details:
   - Title
   - Description
   - Icon (choose from available icons)
   - Price Range
   - Display Order

### Adding Service Features

1. Go to Admin Panel → Service Features → Add Feature
2. Select the service and add feature details

### Adding Testimonials

1. Go to Admin Panel → Testimonials → Add Testimonial
2. Fill in client information and mark as "Featured" to display on the page

## API Endpoints

- `GET /api/service/<service_id>/price/` - Get service price information (JSON)

## Technologies Used

- Django 5.0+
- Python 3.8+
- Tailwind CSS
- Lucide Icons
- SQLite (default, can be changed to PostgreSQL/MySQL)

## License

This project is part of Zylo Coroe software house.

## Support

For issues or questions, contact: hello@zylocoroe.com

