# Portfolio AI Project

This project consists of a Next.js frontend and a Spring Boot backend, designed to be deployed as separate AWS Amplify applications.

## Project Structure

- **Frontend**: Next.js application with TypeScript and Tailwind CSS
- **Backend**: Spring Boot application with MySQL database

## Deployment to AWS Amplify

### Frontend Deployment

1. Create a new Amplify app from the GitHub repository
2. Connect to your GitHub account and select the repository
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `out`
4. Configure environment variables:
   - Add `NEXT_PUBLIC_API_URL` with the URL of your backend Amplify app (e.g., `https://api.yourdomain.com`)

### Backend Deployment

1. Create a new Amplify app from the GitHub repository
2. Connect to your GitHub account and select the repository
3. Configure build settings:
   - Build command: `mvn clean package -DskipTests`
   - Output directory: `target`
4. Configure environment variables:
   - `SPRING_DATASOURCE_URL`
   - `SPRING_DATASOURCE_USERNAME`
   - `SPRING_DATASOURCE_PASSWORD`

## Local Development

1. Clone the repository:
   ```
   git clone https://github.com/scottfabini/portfolio-ai.git
   cd portfolio-ai
   ```

2. Run the backend:
   ```
   cd backend
   mvn spring-boot:run
   ```

3. Run the frontend:
   ```
   cd frontend
   npm install
   npm run update-env
   npm run dev
   ```

4. Or use Docker Compose:
   ```
   docker-compose up
   ```

## Environment Configuration

The frontend uses a runtime environment configuration system to ensure the correct API URL is used in both development and production:

1. During build time, the `update-env.js` script generates an `env-config.js` file
2. This file is loaded by the custom `index.html` before the application
3. The API URL is read from `window.ENV` if available, or falls back to environment variables 