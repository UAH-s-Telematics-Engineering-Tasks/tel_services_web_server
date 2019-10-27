#!/bin/bash

#sudo apt install apache2 #Apache2 is a daemon (hhtp) that listens for web requests and answers them!

sudo mkdir /var/www/smart_room_root # Create a folder containing the webpage

sudo git clone https://github.com/pcolladosoto/tel_services_web_server
sudo git checkout pablo

sudo  cp smart_room.conf /etc/apache2/sites-available/smart_room.conf # Copy the premade conf file to the appropriate location

sudo a2ensite smart_room.conf # Enable the virtual site configured in the above conf file

#ls /etc/apache2/sites-enabled # Check if the site has been enabled correctly!

sudo service apache2 reload # Let the changes take effect!

sudo useradd --shell /usr/sbin/nologin web_admin # The no login shell refuses acces!
sudo usermod -d /var/www/smart_room_root web_admin # Grant access to the web root!
sudo usermod -a -G www-data web_admin # Add the user to the www-data group!

sudo cp updated_shells /etc/shells # Declare nologin as a valid shell. Needed for some daemons...

sudo chgrp www-data /var/www/smart_room_root/Server_files -R #Change the directory's group
sudo chown web_admin /var/www/smart_room_root/Server_files -R # Change the directory's owner

#Don't forget to add <serverIP> sroom.test.org to your /etc/hosts file!
