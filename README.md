# Portfolio Website with ToDo App

A modern portfolio website built with Next.js, Spring Boot, and MySQL, featuring a ToDo application as a demonstration of full-stack development skills.

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

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-ai
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
├── frontend/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   ├── config/        # Configuration files
│   ├── public/        # Static assets
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
├── backend/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/portfolio/
│           │       ├── controllers/  # REST controllers
│           │       ├── services/     # Business logic
│           │       ├── models/       # Entity classes
│           │       ├── repositories/ # JPA repositories
│           │       └── config/       # Configuration classes
│           └── resources/            # Application properties
└── docker-compose.yml
```

## Deployment

The application is configured for deployment on AWS Amplify. Deployment instructions will be added in a future update.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 