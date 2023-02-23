FROM node:16.10.0

ARG NAMESPACE

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build:${NAMESPACE}

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist /usr/share/nginx/html
COPY --from=angular app/.docker/nginx/default.conf /etc/nginx/conf.d/default.conf
