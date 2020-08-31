############
### prod ###
############

# base image
FROM nginx:1.16.0-alpine

ARG BASE_HREF="/services/accountant/"

RUN echo ${BASE_HREF}

# copy artifact build from the 'build environment'
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf
# TODO: Find a better way to replace configurations
RUN sed -i "s|###LOCATION###|${BASE_HREF}|g" /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
# Placeholder