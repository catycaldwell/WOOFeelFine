#!/usr/bin/env bash
sudo docker build -t woo .
sudo docker run -p 80:80 -ti woo
