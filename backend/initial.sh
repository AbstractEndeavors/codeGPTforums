#!/bin/bash

# Update and upgrade packages
echo "Updating and upgrading packages..."
sudo apt-get update && sudo apt-get upgrade -y

# Install Python 3, pip, and venv
echo "Installing Python 3, pip, and venv..."
sudo apt-get install -y python3 python3-pip python3-venv

# Create user profile
echo "Creating user 'general'..."
sudo useradd -m general
sudo passwd general

# Create site directory
echo "Creating site directory..."
sudo mkdir -p /var/www/html/ireadsolidity.io
sudo chown -R general:general /var/www/html/ireadsolidity.io

# Set up virtual environment and Flask API essentials
echo "Setting up virtual environment and Flask API essentials..."
sudo -u general bash -c "cd /var/www/html/ireadsolidity.io && python3 -m venv venv && source venv/bin/activate && pip install Flask Flask-RESTful && deactivate"

sudo tee /var/www/html/ireadsolidity.io/app.py << EOL
from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
EOL

# Install Gunicorn in the virtual environment
echo "Installing Gunicorn..."
sudo -u general bash -c "cd /var/www/html/ireadsolidity.io && source venv/bin/activate && pip install gunicorn && deactivate"

# Create Gunicorn systemd service
echo "Creating Gunicorn systemd service..."
sudo tee /etc/systemd/system/clownworld.service << EOL
[Unit]
Description=Clown World Gunicorn Daemon
After=network.target

[Service]
User=general
Group=general
WorkingDirectory=/var/www/html/ireadsolidity.io
ExecStart=/var/www/html/ireadsolidity.io/venv/bin/gunicorn --workers 3 --bind unix:clownworld.sock -m 007 app:app

[Install]
WantedBy=multi-user.target
EOL

# Enable and start Gunicorn service
echo "Enabling and starting Gunicorn service..."
sudo systemctl enable clownworld.service
sudo systemctl start clownworld.service

# Install Nginx
echo "Installing Nginx..."
sudo apt-get install -y nginx

# Configure Nginx to proxy requests to Gunicorn
echo "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/clownworld << EOL
server {
    listen 80;
    server_name ireadsolidity.io;

    location / {
        include proxy_params;
        proxy_pass http://unix:/var/www/html/ireadsolidity.io/clownworld.sock;
    }
}
EOL

# Enable the Nginx configuration
echo "Enabling Nginx configuration..."
sudo ln -s /etc/nginx/sites-available/clownworld /etc/nginx/sites-enabled

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx service
echo "Restarting Nginx service..."
sudo systemctl restart nginx

echo "Setting up UFW firewall..."
sudo apt-get install -y ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw --force enable

echo "Installing and configuring fail2ban..."
sudo apt-get install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

echo "Installing Git..."
sudo apt-get install -y git

echo "Configuring Git..."
# Replace these values with your own name and email
git config --global user.name "putkoff"
git config --global user.email "putkey2@sbcglobal.net"

echo "Installing python-dotenv..."
sudo -u general bash -c "cd /var/www/html/ireadsolidity.io && source venv/bin/activate && pip install python-dotenv && deactivate"

echo "Creating .env file..."
sudo -u general touch /var/www/html/ireadsolidity.io/.env

echo "Enabling automatic security updates..."
sudo apt-get install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
sudo ufw allow 5000


echo "Setup complete!"
