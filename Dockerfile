# Use a specific version of Node.js (example: Node.js 20, though this version doesn't exist, use a real version)
FROM node:20-slim

# Update package repositories and install necessary dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-dev \
    python3-pip \
    make \
    g++

# Set working directory inside the container
WORKDIR /app/solo-chat-ui

# Copy application files into the container
COPY . .

# Install dependencies using npm ci for production builds
RUN npm i

STOPSIGNAL SIGTERM
