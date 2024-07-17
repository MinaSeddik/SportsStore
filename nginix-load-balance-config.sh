#https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/

upstream backend {
   # no load balancing method is specified for Round Robin
   server backend1.example.com;
   server backend2.example.com;
}

upstream backend {
#  Least Connections – A request is sent to the server with the least number of active connections, again with server weights taken into consideration:
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
}


upstream backend {
    server backend1.example.com weight=5;
    server backend2.example.com;

#    IP address 192.0.0.1 is marked as a backup server and does not receive requests unless both of the other servers are unavailable.
    server 192.0.0.1 backup;
}
