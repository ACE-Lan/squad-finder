FROM node:12.18.3-alpine as sf-squadfinder

WORKDIR /app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY . ./

RUN npm run install
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=sf-squadfinder app/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf