# Use an official Node.js image with version 16.18.1 and Alpine Linux
FROM node:16.18.1-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install package
RUN npm install
# Build the Vue.js application
RUN npm run build

# Expose the port the app will run on 8080
EXPOSE 5173

# Define the command to run the application
CMD ["npm", "run", "serve"]