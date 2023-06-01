# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets
# Name the node stage "builder"
FROM node:18-alpine AS builder
# Set working directory
WORKDIR /src
COPY ./package*.json ./
# install node modules and build assets
RUN npm install 
COPY ./ .
RUN npm run build

WORKDIR /app

# nginx state for serving content
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets from builder stage
COPY --from=builder /src/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]