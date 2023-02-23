FROM node:16.10.0

ARG NAMESPACE

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY app/dist /usr/share/nginx/html
COPY app/.docker/nginx/default.conf /etc/nginx/conf.d/default.conf
