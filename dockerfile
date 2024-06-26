# Use a lightweight Node.js image as the base image for the build stage
FROM node:lts-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js and npm
RUN apk add --no-cache npm

# Install dependencies
RUN npm install --force

# Copy the rest of the frontend code to the container
COPY . .

# Build the frontend application
RUN npm run build

# Use a smaller image for production
FROM nginx:stable-alpine

# Copy the built frontend files from the build-stage image
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for HTTP
EXPOSE 80

# Start Nginx to serve the frontend application
CMD ["nginx", "-g", "daemon off;"]
