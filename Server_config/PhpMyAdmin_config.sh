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
