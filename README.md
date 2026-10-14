# UPSK Assessment — System Design Fundamentals

A backend service built as part of the UPSK **System Design Fundamentals** assessment. The project focuses on application startup, environment configuration, input validation, and health-check verification.

## Overview

This project uses NestJS and Node.js to demonstrate a simple backend service with:

- Environment-based port configuration.
- Validation of the `PORT` environment variable.
- A health-check endpoint for verifying service availability.
- A reproducible application startup command.
- Build and regression verification after fixing a startup issue.

## Tech Stack

- **Node.js**
- **TypeScript**
- **NestJS**
- **npm**
- **Git**

## Project Structure

```text
Upsk_Assessment_Bhavani/
└── api/
    ├── src/
    │   ├── main.ts
    │   ├── app.module.ts
    │   └── health.controller.ts
    ├── .env
    ├── .env.example
    ├── package.json
    └── ...
```

## Prerequisites

Install the following before running the service:

- Node.js
- npm

## Setup and Run

1. Open a terminal and navigate to the API directory:

   ```bash
   cd api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables in `api/.env`.

   Example:

   ```env
   PORT=3000
   ```

   Use `.env.example` as a reference for the available configuration variables. Keep actual secrets out of version control.

4. Build the application:

   ```bash
   npm run build
   ```

5. Start the application:

   ```bash
   npm start
   ```

   The service should start on port `3000` when configured as shown above.

## Health Check

The service exposes the following endpoint:

```http
GET /health
```

Test it using curl:

```bash
curl -i http://localhost:3000/health
```

Expected response:

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "ok": true
}
```

A successful response indicates that the application is running and the health endpoint is reachable.

## Environment Validation

The application validates `PORT` during startup. It must be an integer between `1` and `65535`.

The application rejects missing, non-numeric, or out-of-range port values instead of starting with invalid configuration.

During the assessment, the application initially failed because the `.env` file was not loaded by the startup command. The startup script was updated to load the environment file before launching NestJS:

```json
"start": "node --env-file=.env ./node_modules/@nestjs/cli/bin/nest.js start"
```

After the change, the application started successfully on port `3000`, and the health endpoint returned HTTP `200 OK`.

## Verification Performed

- [x] Application build completed successfully.
- [x] Startup issue related to environment loading was fixed.
- [x] Application started successfully on port `3000`.
- [x] `GET /health` returned HTTP `200 OK`.
- [x] Regression check completed after the fix.

## Design Decision

**Architecture: Single application**

A single-app layout was chosen for this assessment because it keeps the initial service straightforward to develop, run, and verify. Configuration, startup, and application logic remain easy to inspect while the project is small.

If the application grows, its responsibilities can be separated into modules or independent services when there is a clear need.

## Current Limitations

This is an assessment project and is not production-ready. The following capabilities remain future work:

- Database persistence.
- Authentication and authorization.
- Automated unit and integration tests.
- Production-grade secret management and deployment configuration.
- Additional monitoring and operational checks.

## Learning Outcomes

This assessment provided practical experience with:

- Understanding environment-variable loading.
- Validating configuration before application startup.
- Diagnosing and fixing a startup failure.
- Building a NestJS application.
- Verifying a service through an HTTP health check.
- Performing a regression check after a code change.

## Author

**Tadimalla Bhavani**

System Design Fundamentals — UPSK Assessment

---

*Note: Do not commit real credentials, API keys, or other secrets in `.env` files. Use environment variables or an appropriate secret-management solution for deployment.*
