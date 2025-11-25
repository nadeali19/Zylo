#!/bin/bash

# Zylo Coroe Django Service Page Setup Script

echo "🚀 Setting up Zylo Coroe Django Service Page..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install -r requirements.txt

# Run migrations
echo "🗄️  Running database migrations..."
python manage.py makemigrations
python manage.py migrate

# Create initial data
echo "📝 Creating initial data..."
python manage.py create_initial_data

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  source venv/bin/activate"
echo "  python manage.py runserver"
echo ""
echo "Then visit:"
echo "  - Service Page: http://127.0.0.1:8000/"
echo "  - Admin Panel: http://127.0.0.1:8000/admin/"
echo ""
echo "To create a superuser for admin access:"
echo "  python manage.py createsuperuser"
echo ""

