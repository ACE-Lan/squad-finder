FROM node:16.10.0

ARG NAMESPACE

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /nextjs-ui/out /usr/share/nginx/html
