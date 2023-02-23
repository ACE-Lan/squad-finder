FROM node:12.18.3-alpine as sf-squadfinder

WORKDIR /app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY . ./

RUN npm install
RUN npm run build