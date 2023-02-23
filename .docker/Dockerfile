FROM node:16.10.0

ARG NAMESPACE

WORKDIR /app

COPY . ./

ENV PORT 8081
ENV HOST 0.0.0.0

RUN npm install
RUN npm run build