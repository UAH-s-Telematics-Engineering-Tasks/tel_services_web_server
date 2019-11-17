#!/bin/bash

# Don't forget to add <serverIP> sroom.test.org to your /etc/hosts file for an easier access to the site!

# Apache2 is a daemon (hhtp) that listens for web requests and answers them!
# sudo apt install apache2

# Create a folder containing the webpage
sudo mkdir /var/www/smart_room_root

# Get our server files from GitHub
sudo git clone https://github.com/pcolladosoto/tel_services_web_server
sudo git checkout pablo

# Copy the premade .conf file to the appropriate location
sudo  cp smart_room.conf /etc/apache2/sites-available/smart_room.conf

# Enable the virtual site configured in the above conf file
sudo a2ensite smart_room.conf

# Disable apache's default site to be able to serve requests made to the server's IP instead of the hostname.
# Requests made to sroom.test.org will carry that URL in an HTTP header field and Apache will be able to find
# the virtual host. If the request is made to the server's IP Apache will just serve the default page unless
# we disable it... If we do the only active page is smart_room so it'll be the only one we serve!
sudo a2dissite 000-default.conf

# Check whether the site has been enabled correctly!
# ls /etc/apache2/sites-enabled

# Let the changes take effect!
sudo service apache2 reload

# The no login shell refuses acces!
sudo useradd --shell /usr/sbin/nologin web_admin

# Grant access to the web root!
sudo usermod -d /var/www/smart_room_root web_admin

# Add the user to the www-data group!
sudo usermod -a -G www-data web_admin

# Declare nologin as a valid shell. Needed for some daemons...
sudo cp updated_shells /etc/shells

# Change the directory's group
sudo chgrp www-data /var/www/smart_room_root/Server_files -R
# Change the directory's owner
sudo chown web_admin /var/www/smart_room_root/Server_files -R
