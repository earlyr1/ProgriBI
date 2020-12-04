FROM nginx

WORKDIR /

ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-c", "nginx.conf", "-g", "daemon off;"]