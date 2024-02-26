FROM nginx:latest

#copy our sample.conf 
COPY sample.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

#copy ssl cert and key generated locally
COPY nginx /secure/nginx/


EXPOSE 80
EXPOSE 443