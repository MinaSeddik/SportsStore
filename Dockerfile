# use the latest version of the official nginx image as the base image
#FROM nginx:latest
FROM nginx:1.27.0

# copy the custom nginx configuration file to the container in the
# default location
COPY nginx.conf /etc/nginx/nginx.conf

# copy the built Angular app files to the default nginx html directory
COPY /dist/sports-store/browser /usr/share/nginx/html

# the paths are relative from the Docker file

# Build Docker image
# docker build -t nginx-sports-store-app-docker-image .
# docker image ls


# Run the image
# docker run --name nginx-sports-store-app-docker-container -d -p 8080:80 nginx-sports-store-app-docker-image
# docker container ls


# Remove container
# get the container Id first
#docker container ls
#docker stop 91c1161c6bdc
#docker rm 91c1161c6bdc
