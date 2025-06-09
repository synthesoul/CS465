# Travlr Getaways – Module 5: API Separation & Integration

## Purpose
Advance backend architecture by implementing **Separation of Concerns**. This module isolates database access and routing logic into a dedicated API app (`app_api`) and tests full-stack communication between the frontend, Express server, and MongoDB via RESTful endpoints.

---

## Completed Tasks

- Refactored database logic into `app_api/` using Express Router.
- Created `app_api/controllers/trips.js` and `routes/index.js` for trip endpoint logic.
- Connected Mongoose models from `app_api/models/db.js` to MongoDB instance on Void Linux.
- Seeded trips data using `scripts/seed.js` and verified insertion.
- Implemented `/api/trips` endpoint to return trip data in JSON format.
- Tested API in Postman and validated with `curl` and `mongosh`.
- Ensured full Express app boot sequence and MongoDB startup on `127.0.0.1:27017`.

---

## Rubric Alignment

### Establish Routes
- RESTful `/api/trips` route served via `app_api/routes/index.js`.

### MVC and REST API
- Controllers, models, and routes modularized using Express best practices.

### Testing
- Validated routes using Postman, browser, and shell tools.
- Confirmed Mongoose `find({})` returns JSON data correctly.
- Handled error states with appropriate HTTP response codes.

---

## Development Insights

Module 5 emphasized **decoupling logic** and testing inter-app communication. Manually managing MongoDB on Void Linux enhanced control over the dev environment and reinforced network/debugging skills.

---

## Next Steps

- Build remaining CRUD operations (`POST`, `PUT`, `DELETE`).
- Begin Angular frontend integration using live `/api` endpoints.
- Add authentication via JWT and secure routes.
- Polish UI with dynamic, responsive design.

---

## Environment

- **OS**: Void Linux (Plasma)
- **Node**: 20+
- **MongoDB**: Manually installed, local bind (127.0.0.1)
- **Editor**: VS Code / Kate
- **Shell**: bash 5.2

---

> This README reflects Module 5 progress. Repository structure cleaned and organized into functional domains (`app_api`, `app_server`, `public`, `scripts`, `data`, and `archive`).
