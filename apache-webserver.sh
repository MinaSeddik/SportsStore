# install apache web server on linux ubuntu
apt install apache2

# start / stop / restart / status apache
service apache2 status
service apache2 start
service apache2 stop
service apache2 restart

systemctl start apache2
systemctl status apache2
systemctl stop apache2
systemctl restart apache2
systemctl relaod apache2


# check web folder
ll /var/www/html

# to list / enable apache module
a2enmod
a2enmod <module-name>
a2enmod pathon
a2enmod perl

# to list all the available web sites
ls /etc/apache2/sites-available/
# 000-default.conf  default-ssl.conf

# enable / disable a web site
# enable website
a2ensite 000-default.conf
# disable website
a2dissite 000-default.conf

# reload apache config files
systemctl relaod apache2

sudo cp 000-default.conf angular-local.conf
sudo nano angular-local.conf

<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        DocumentRoot /home/mina/Desktop/SportsStore/dist/sports-store/browser

        <Directory "/home/mina/Desktop/SportsStore/dist/sports-store/browser">
#            FallbackResource is a short-hand method for rewriting your URIs. As such,
#            there won't be any redirection to index.html, but the URI you request will be
#            mapped to index.html, where Angular can process it.
            FallbackResource ./index.html

#            FollowSymLinks means if a dir is a symbol link, follow the link
#            Indexes means a dir can be show as list if no index page.
            Options Indexes FollowSymLinks

#            AllowOverride which allows you to override some Apache settings via a
#            .htaccess file you can place in a directory.
            AllowOverride All

#            Allows from all IPs
            Require all granted

#            configure the apache server to compress the JS,CSS and HTML files before rendering in the browser.
            AddOutputFilterByType DEFLATE text/html text/css application/x-javascript application/javascript application/x-font-ttf application/vnd.ms-fontobject application/xml font/opentype image/x-icon text/xml
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>


a2dissite 000-default.conf
a2ensite angular-local.conf
systemctl relaod apache2

# to enable AddOutputFilterByType
a2enmod deflate
a2enmod filter
systemctl restart apache2




# Add new web site (mywebsite.com)
nano /etc/apache2/sites-available/mywebsite.com.conf
<VirtualHost *:80>
	ServerAdmin admin-email-address@yahoo.com
	ServerName mywebsite.com
	ServerAlias www.mywebsite.com
	DocumentRoot /var/www/mywebsite.com
	ErrorLog ${APACHE_LOG_DIR}/mywebsite.com/error.log
	CustomLog ${APACHE_LOG_DIR}/mywebsite.com/access.log combined
</VirtualHost>

# create data dir and log dir for mywebsite.com
mkdir -p /var/www/mywebsite.com/
mkdir -p ${APACHE_LOG_DIR}/mywebsite.com

# enable the website in apache
a2ensite mywebsite.com.conf

# Also we need to reload apache config
systemctl relaod apache2

# -------------------------------------------------------------------

# Add another web site (mywebsite.net)
nano /etc/apache2/sites-available/mywebsite.net.conf
<VirtualHost *:80>
	ServerAdmin admin-email-address@gmail.net
	ServerName mywebsite.net
	ServerAlias www.mywebsite.net
	DocumentRoot /var/www/mywebsite.net
	ErrorLog ${APACHE_LOG_DIR}/mywebsite.net/error.log
	CustomLog ${APACHE_LOG_DIR}/mywebsite.net/access.log combined
</VirtualHost>

# create data dir and log dir for mywebsite.net
mkdir -p /var/www/mywebsite.net/
mkdir -p ${APACHE_LOG_DIR}/mywebsite.net

# enable the website in apache
a2ensite mywebsite.net.conf

# Also we need to reload apache config
systemctl relaod apache2


# Other Virtual host configuration
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/html

    <Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    <Location "/api">
        ProxyPass http://localhost:8080;
        ProxyPassReverse http://localhost:8080;
        Header set Host $host
        Header set X-Real-IP $remote_addr
        Header set X-Forwarded-For $proxy_add_x_forwarded_for
    </Location>
</VirtualHost>

# to display apache server configuration
apache2ctl -S


# install ssl module
a2enmod ssl

# then we should start the server
service apache2 restart
systemctl restart apache2

# go to site-available dir
cd /etc/apache2/sites-available

# create conf file for my secure website using default-ssl.conf template file
cp default-ssl.conf mysecurewebsite.com.conf

# you can use https://letsencrypt.org/ to generate free certificates
# letsencrypt's certificates are valid for 90 days









