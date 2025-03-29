# Portfolio AI Project

A modern portfolio website built with Next.js, Spring Boot, and MySQL, featuring a ToDo application as a demonstration of full-stack development skills.

## Repository Structure

This project uses Git submodules to manage the frontend and backend components:

- `portfolio-ai` (this repository): Main project repository with Docker configurations
- `portfolio-ai-frontend`: Next.js frontend application (submodule)
- `portfolio-ai-backend`: Spring Boot backend application (submodule)

## Tech Stack

- Frontend:
  - Next.js 14 (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Next Themes

- Backend:
  - Spring Boot 3.2
  - Java 17
  - MySQL 8.0
  - JPA/Hibernate
  - Lombok

- Infrastructure:
  - Docker
  - Docker Compose
  - AWS Amplify (for deployment)

## Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ (for local development)
- Java 17+ (for local development)
- Maven (for local development)
- Git (with support for submodules)

## Getting Started

1. Clone the repository with submodules:
```bash
git clone --recurse-submodules https://github.com/scottfabini/portfolio-ai.git
cd portfolio-ai
```

If you already cloned the repository without the submodules:
```bash
git submodule init
git submodule update
```

2. Make the build script executable:
```bash
chmod +x docker-build.sh
```

3. Build and start the containers:
```bash
./docker-build.sh
```

4. Access the applications:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- MySQL: localhost:3306

## Development

### Working with Submodules

To update a submodule to the latest changes from its remote repository:
```bash
cd frontend  # or backend
git pull origin main
cd ..
git add frontend  # or backend
git commit -m "Update frontend submodule"
```

To push changes to a submodule:
```bash
cd frontend  # or backend
git add .
git commit -m "Your changes"
git push origin main
cd ..
git add frontend  # or backend
git commit -m "Update frontend submodule reference"
git push
```

### Frontend Development

The frontend is built with Next.js using the App Router pattern. Key features include:
- Dark mode by default with light mode option
- Responsive design
- Smooth animations with Framer Motion
- Type-safe API calls with TypeScript
- Modern UI components with Tailwind CSS

### Backend Development

The backend is a Spring Boot application providing REST APIs for the ToDo application. Features include:
- RESTful API endpoints
- MySQL database integration
- JPA/Hibernate for data persistence
- Lombok for reducing boilerplate code

## Project Structure

```
portfolio-ai/
├── frontend/  # Git submodule: portfolio-ai-frontend
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   ├── public/        # Static assets
│   └── styles/        # Global styles
├── backend/   # Git submodule: portfolio-ai-backend
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/portfolio/
│           │       ├── controllers/  # REST controllers
│           │       ├── services/     # Business logic
│           │       ├── models/       # Entity classes
│           │       └── repositories/ # JPA repositories
│           └── resources/            # Application properties
└── docker-compose.yml  # Main project Docker configuration
```

## Deployment

The application is configured for deployment on AWS Amplify. The frontend and backend can be deployed separately:

### Frontend Deployment
- Deploy the frontend submodule to AWS Amplify
- Configure the environment variable `NEXT_PUBLIC_API_URL` to point to your deployed backend

### Backend Deployment
- Deploy the backend submodule to AWS Elastic Beanstalk or another suitable service
- Configure the database connection settings in the deployment environment

## License

This project is licensed under the MIT License - see the LICENSE file for details. 