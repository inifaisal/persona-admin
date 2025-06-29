# ---- Build Stage ----
# 1. Use a Node.js image to build the React application
FROM node:18-alpine AS build
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
# If using yarn, change this to: RUN yarn install
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application, creating the /dist folder
# If using yarn, change this to: RUN yarn build
RUN npm run build

# ---- Production Stage ----
# 2. Use a lightweight Nginx image to serve the static files
FROM nginx:stable-alpine

# Copy the custom Nginx configuration
# This is crucial for routing in a Single Page Application (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets from the 'build' stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Command to start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
