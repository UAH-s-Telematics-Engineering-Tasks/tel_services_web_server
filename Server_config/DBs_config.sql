/*-- Query the MySQL DB to find the current users
SELECT user,authentication_string,plugin,host FROM mysql.user;

-- We can also use the root account but we need to change its authentication plugin
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

-- Update the privileges
FLUSH PRIVILEGES;*/

-- Optionally create a new user for managing the DBs
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';

-- Grant privileges to the new user to be able to add/change/remove anything from anywhere
GRANT ALL PRIVILEGES ON *.* TO 'sammy'@'localhost' WITH GRANT OPTION;

-- Check the changes took effect
SELECT user,authentication_string,plugin,host FROM mysql.user;