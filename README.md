## Module 4: MongoDB Integration with Mongoose

### Purpose
Establish a robust backend by connecting MongoDB to the Express app via Mongoose. Define schema models, populate test data, and expose an API to serve JSON responses.

---

### Completed Tasks
- Installed MongoDB binaries manually for Void Linux and configured it to run locally.
- Created `app_api/models/db.js` to connect to MongoDB using Mongoose with error handling.
- Defined the `Trip` schema using Mongoose with fields such as name, destination, cost, etc.
- Populated the `trips` collection with seed data and validated insertion via `mongosh`.
- Created Express API routes to serve `/api/trips` as JSON.
- Tested API response and database connection using Postman and direct inspection.
- Resolved permissions issues in `views/` and verified full app boot sequence.
- Confirmed MongoDB service was active and listening on `127.0.0.1:27017`.

---

### Rubric Alignment
- **Database Access Module:** Connected using Mongoose with error checks.
- **API Integration:** Defined schema and successfully returned data as JSON.
- **Populate Database:** Seeded collection with realistic data.
- **Testing:** Verified MongoDB content and Express route output.

---

### Reflection
This module was pivotal in forming the full stack. Bridging Express and MongoDB through Mongoose offered real experience with schema design and async database flows. Installing and debugging MongoDB manually on Void Linux reinforced Linux admin skills and helped troubleshoot permission issues that might arise in production environments.

---

### Development Insights
Moving forward, the focus will shift to:
- Expanding RESTful endpoints (CRUD operations)
- Angular integration to consume live API data
- Adding form handling and submission from the front end
- Implementing JWT authentication and route protection

The groundwork laid in Module 4 ensures a strong backend that is ready to support a dynamic, secure Angular front end.
