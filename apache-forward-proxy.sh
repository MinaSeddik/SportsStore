
# enable necessary modules
sudo a2enmod proxy proxy_http proxy_connect

# activate new configuration
systemctl restart apache2

# configure proxy
sudo nano /etc/apache2/mods-enabled/proxy.conf

# uncomment the following lines and add "Allow from all", then test and verify it's working

ProxyRequests On
<Proxy *>
   AddDefaultCharset off
   Allow from all
   #Require all denied
   #Require local
</Proxy>

# for more secure config
ProxyRequests On
<Proxy *>
    AddDefaultCharset Off
    Order deny,allow
    Deny from all
    Allow from <Provide your system IP here>
</Proxy>
