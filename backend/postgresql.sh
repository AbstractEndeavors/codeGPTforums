#!/bin/bash
set -e

# Update package lists and install required packages
sudo apt-get update
sudo apt-get -y install postgresql postgresql-contrib python3-pip libpq-dev

# Create a new PostgreSQL user and database for the ChatGPT Forum
sudo -u postgres psql -c "CREATE DATABASE codegptforum;"
sudo -u postgres psql -c "CREATE USER general WITH PASSWORD 'General55!!';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE codegptforum TO general;"

# Install Flask and other required packages
pip install Flask Flask-SQLAlchemy psycopg2-binary Flask-Script Flask-Migrate

# Create a new directory for the project and navigate to it
mkdir chatgpt-forum
cd chatgpt-forum

# Create a new Flask app
cat > app.py << EOF
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://general:General55!!@localhost/codegptforum'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

@app.route('/')
def home():
    return 'Welcome to the ChatGPT Forum!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
EOF

# Create a new Flask app
cat > wsgi.py << EOF
from app import app, db
from flask_migrate import cli as migrate_cli

migrate_cli.register(app, db)

if __name__ == "__main__":
    app.run()
EOF
sudo ufw allow 5000

# Run the Flask app
python app.py

