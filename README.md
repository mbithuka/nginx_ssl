pull from hub


docker pull mbithuka/nginx_ssl:1.0.0


to run


docker run -p 9000:80 -p 9001:443 mbithuka/nginx_ssl:1.0.0


to consume


open browser  for https 


https://localhost:9001/


for http


http://localhost:9000/
