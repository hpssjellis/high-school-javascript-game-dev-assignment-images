# Use an official PHP image with the Apache web server
FROM php:8.2-apache

# Copy your application code into the web root directory of the container
COPY . /var/www/html/

# Expose the default Apache port (Render automatically maps this)
EXPOSE 80

# The base image already has the CMD set to run Apache,
# so no specific Start Command is needed in the Render dashboard.
