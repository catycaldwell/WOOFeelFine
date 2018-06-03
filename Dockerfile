FROM ubuntu:18.04
MAINTAINER Caty Caldwell

RUN apt update -y && apt upgrade -y
RUN apt install -y systemd python3 python3-pip nginx
RUN apt install -y lsb-core vim
RUN pip3 install uwsgi flask toml

COPY init.d/uwsgi /etc/init.d/
RUN chmod +x /etc/init.d/uwsgi

COPY nginx /etc/nginx
#COPY vassals/* /etc/uwsgi/vassals/

CMD service nginx start

# Create web user and switch to this user
RUN useradd --create-home --shell /bin/bash webuser
USER webuser
WORKDIR /home/webuser

# Copy web applications
COPY --chown=webuser html /home/webuser/html

USER root
ENTRYPOINT service nginx start && service uwsgi start && bash
