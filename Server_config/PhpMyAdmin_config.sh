#!/bin/bash
# Configuring PhpMyAdmin for Ubuntu Server 18.04
# Install mysql-server to provide the PhpMyAdmin DB as well as PhpMyAdmin
# Apache 2 should already be installed
# Careful when installing PhpMyAdmin. Hit enter to highlight apache2!
sudo apt update
sudo apt install -y mysql-server phpmyadmin

# Check PHP version and PHP Modules
php --version
ehco ""
php -m | grep mysql*

# Fix the count() function in PhpMyAdmin. Delete the third parenthesis in line 614
# Just copy the corrected file
sudo cp sql.lib.php.corrected /usr/share/phpmyadmin/libraries/sql.lib.php

# Reload Apache 2 for the changes to take effect
sudo service apache2 restart

# Check that the config has been enabled
ls /etc/apache2/conf-enabled | grep phpmyadmin.conf

# Query the MySQL DB to find the current users
echo "Run SELECT user,authentication_string,plugin,host FROM mysql.user; within MySQL"
sudo mysql

# We can also use the root account but we need to change its authentication plugin
sudo mysql
echo "Run ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; within MySQL"
echo "Run FLUSH PRIVILEGES; from within MySQL to update them"
ehco "Run SELECT user,authentication_string,plugin,host FROM mysql.user; to check the changes took effect"

# Optionally create a new user for managing the DBs
sudo mysql
echo "Run CREATE USER 'user'@'localhost' IDENTIFIED BY 'password'; within MySQL"

# Grant privileges to the new user to be able to add/change/remove anything from anywhere
echo "Run GRANT ALL PRIVILEGES ON *.* TO 'sammy'@'localhost' WITH GRANT OPTION; within MySQL"
