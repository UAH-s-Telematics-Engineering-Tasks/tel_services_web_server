#!/bin/bash

# As we are working within /var/www and our user doesn't have access to the directory we will perform the pulls
# with sudo. We then need to change file permissions for Apache's user
sudo git fetch
sudo git pull

sudo chown --recursive web_admin:www-data Server_files/
