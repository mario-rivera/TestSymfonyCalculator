FROM php:7.1-apache

COPY ./vhosts/apache.conf /etc/apache2/sites-available/apache.conf

RUN a2ensite apache && a2dissite 000-default