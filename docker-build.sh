#!/bin/bash

# Make the script executable
chmod +x docker-build.sh

# Build and start the containers
docker compose up --build -d

# Wait for the services to be ready
echo "Waiting for services to start..."
sleep 10

# Check if services are running
docker-compose ps

echo "Services are up and running!"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:8080"
echo "MySQL: localhost:3306" 