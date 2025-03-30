#!/bin/bash

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}==========================================${NC}"
echo -e "${BLUE}    Portfolio AI Docker Build Script     ${NC}"
echo -e "${BLUE}==========================================${NC}"

# Make the script executable
chmod +x docker-build.sh

# Check if Docker is running
echo -e "\n${YELLOW}Checking if Docker is running...${NC}"
if ! docker info >/dev/null 2>&1; then
  echo -e "${RED}Docker is not running. Please start Docker and try again.${NC}"
  exit 1
fi
echo -e "${GREEN}Docker is running!${NC}"

# Check if docker-compose is installed
echo -e "\n${YELLOW}Checking for Docker Compose...${NC}"
if ! command -v docker-compose >/dev/null 2>&1 && ! command -v docker compose >/dev/null 2>&1; then
  echo -e "${RED}Docker Compose not found. Please install Docker Compose and try again.${NC}"
  exit 1
fi
echo -e "${GREEN}Docker Compose is available!${NC}"

# Check if the submodules are initialized
echo -e "\n${YELLOW}Checking Git submodules...${NC}"
if [ ! -d "frontend/.git" ] || [ ! -d "backend/.git" ]; then
  echo -e "${YELLOW}Initializing Git submodules...${NC}"
  git submodule update --init --recursive
  if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to initialize Git submodules. Please check your Git configuration.${NC}"
    exit 1
  fi
fi
echo -e "${GREEN}Git submodules are ready!${NC}"

# Pull latest changes for submodules
echo -e "\n${YELLOW}Pulling latest changes for submodules...${NC}"
git submodule update --remote --merge
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}Warning: Could not update submodules. Continuing with existing versions.${NC}"
fi

# Build and start the containers
echo -e "\n${YELLOW}Building and starting Docker containers...${NC}"
docker compose down
docker compose build --no-cache
if [ $? -ne 0 ]; then
  echo -e "${RED}Docker build failed. Please check the error messages above.${NC}"
  exit 1
fi

echo -e "\n${YELLOW}Starting containers...${NC}"
docker compose up -d
if [ $? -ne 0 ]; then
  echo -e "${RED}Failed to start containers. Please check the error messages above.${NC}"
  exit 1
fi

# Wait for services to be ready
echo -e "\n${YELLOW}Waiting for services to start...${NC}"
echo -e "This may take a moment as the database initializes and the applications start up."

# Function to check if a service is ready
check_service() {
  local service=$1
  local port=$2
  local max_retries=30
  local retry=0
  
  echo -e "Checking if $service is up on port $port..."
  
  while ! nc -z localhost $port >/dev/null 2>&1; do
    retry=$((retry+1))
    if [ $retry -eq $max_retries ]; then
      echo -e "${RED}$service did not start within the expected time.${NC}"
      echo -e "${YELLOW}Check logs with: docker compose logs $service${NC}"
      return 1
    fi
    printf "."
    sleep 2
  done
  
  echo -e "\n${GREEN}$service is up and running!${NC}"
  return 0
}

# Check for MySQL
check_service "MySQL" 3306
db_status=$?

# Check for Backend (with a longer timeout since it depends on MySQL)
check_service "Backend" 8080
backend_status=$?

# Check for Frontend
check_service "Frontend" 3000
frontend_status=$?

# Check the status of all services
echo -e "\n${YELLOW}Checking container status:${NC}"
docker compose ps

if [ $db_status -eq 0 ] && [ $backend_status -eq 0 ] && [ $frontend_status -eq 0 ]; then
  echo -e "\n${GREEN}==============================================${NC}"
  echo -e "${GREEN}    All services are up and running!         ${NC}"
  echo -e "${GREEN}==============================================${NC}"
  echo -e "${BLUE}Frontend:${NC} http://localhost:3000"
  echo -e "${BLUE}Backend API:${NC} http://localhost:8080/api"
  echo -e "${BLUE}MySQL:${NC} localhost:3306"
  echo -e "\n${YELLOW}Useful commands:${NC}"
  echo -e "  ${BLUE}docker compose logs -f${NC} - View logs from all services"
  echo -e "  ${BLUE}docker compose logs -f frontend${NC} - View frontend logs"
  echo -e "  ${BLUE}docker compose logs -f backend${NC} - View backend logs"
  echo -e "  ${BLUE}docker compose down${NC} - Stop all services"
  echo -e "  ${BLUE}docker compose restart backend${NC} - Restart the backend service"
else
  echo -e "\n${RED}==============================================${NC}"
  echo -e "${RED}    Some services failed to start           ${NC}"
  echo -e "${RED}==============================================${NC}"
  echo -e "Check the logs for more information:"
  echo -e "${BLUE}docker compose logs${NC}"
fi 