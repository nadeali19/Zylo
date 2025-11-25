# Quick Start Guide

## Fast Setup (5 minutes)

1. **Navigate to the project:**
   ```bash
   cd django_service_page
   ```

2. **Run the setup script:**
   ```bash
   ./setup.sh
   ```

3. **Create a superuser (optional but recommended):**
   ```bash
   source venv/bin/activate
   python manage.py createsuperuser
   ```

4. **Start the server:**
   ```bash
   python manage.py runserver
   ```

5. **Open your browser:**
   - Service Page: http://127.0.0.1:8000/
   - Admin Panel: http://127.0.0.1:8000/admin/

## Manual Setup (if script doesn't work)

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup database
python manage.py makemigrations
python manage.py migrate

# Create initial data
python manage.py create_initial_data

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver
```

## What's Included

✅ 6 Pre-configured Services (Web Dev, App Dev, UI/UX, E-commerce, Chatbot, Data Science)
✅ Service Features for each service
✅ 4 Sample Testimonials
✅ Fully functional inquiry form
✅ Email notification system (configure in settings.py)
✅ Beautiful responsive design matching your main website

## Next Steps

1. **Customize Services:** Go to Admin Panel → Services to edit or add services
2. **Add Features:** Admin Panel → Service Features to add benefits for each service
3. **Manage Inquiries:** Admin Panel → Service Inquiries to view form submissions
4. **Configure Email:** Update EMAIL_* settings in `zylo_coroe/settings.py` for email notifications

## Troubleshooting

**Issue:** `ModuleNotFoundError: No module named 'django'`
- **Solution:** Make sure virtual environment is activated and dependencies are installed

**Issue:** `django.db.utils.OperationalError: no such table`
- **Solution:** Run `python manage.py migrate`

**Issue:** No services showing on page
- **Solution:** Run `python manage.py create_initial_data` or add services via admin panel

**Issue:** Email not sending
- **Solution:** Configure EMAIL_* settings in settings.py or set environment variables

