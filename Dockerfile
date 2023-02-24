# Base on offical Node.js Alpine image
FROM node:alpine as Nextjs

# Set working directory
WORKDIR /app

ENV PORT 8080
ENV HOST 0.0.0.0

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY ./ ./

# Build app
RUN npm run build
RUN npm run export

# Base on offical NGINX Alpine image
FROM nginx:alpine

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY --from=Nextjs app/out /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/