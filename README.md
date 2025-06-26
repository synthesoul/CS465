Travlr – Secure Full Stack App (Module 7)

Module 7: Implementing a Security Protocol

Purpose:
Integrate a secure authentication and authorization system using JWT. Protect sensitive API endpoints so only authenticated admin users can access them. Test both back-end and front-end functionality, including login, token handling, and route protection.

Completed Tasks (This Module):
- Developed a JWT-based authentication system with login and register endpoints.
- Created a user model with password hashing using bcrypt.
- Protected travel API routes using custom middleware (verifyToken) and requireAdmin.
- Built an HTML login form (login.html) that authenticates users and receives tokens.
- Created test routes to verify tokens and simulate admin functionality.
- Used curl to test login, token protection, and route access from the CLI.
- Modularized all routes (/auth, /travel, /test) for cleaner structure.
- Confirmed admin-only access to CRUD endpoints for travel data.

Rubric Alignment:

- Develop a Security Protocol:  
  - Added login form and auth.js with JWT-based login/register logic.

- Test the Security Protocol:  
  - Tested routes with curl, verified protected vs. public access.

- Incorporate the Security Protocol:  
  - Applied verifyToken middleware to /travel routes and added requireAdmin.

- Test the Front-End:  
  - login.html authenticates users and displays result message based on token response.

Development Changes Since Module 4:

Feature                      | Module 4                          | Module 7 Updates
----------------------------|-----------------------------------|---------------------------------------------------
Database                    | MongoDB connection and Trip model | Added User model with password hashing
Routes                      | /api/trips public route           | Replaced with /api/travel, added /auth, /test
Authentication              | None                              | JWT login/register, token-based session management
Front-End                   | Angular planned                   | Static login page for token-based login
Route Protection            | None                              | verifyToken + requireAdmin added to routes

How to Run:

1. Install dependencies:
   npm install

2. Start MongoDB (e.g. Docker or local install):
   sudo docker start travlr-mongo

3. Run the server:
   node app.js

4. Open your browser and go to:
   http://localhost:3000/login.html

5. Test endpoints using curl or browser-based tools.

Sample Admin User:

Use this account to test login:

{
  "username": "admin",
  "password": "secret123"
}

Once logged in, your token allows access to:

- POST /api/travel
- PUT /api/travel/:id
- DELETE /api/travel/:id

Folder Tree (simplified):

travlr/
├── app.js
├── README.md
├── package.json
├── public/
│   └── login.html
├── app_api/
│   ├── models/
│   │   ├── db.js
│   │   ├── trip.js
│   │   └── user.js
│   ├── controllers/
│   │   ├── travel.js
│   │   └── auth.js
│   ├── middleware/
│   │   └── verifyToken.js
│   └── routes/
│       ├── index.js
│       ├── travel.js
│       ├── auth.js
│       └── test.js

Git Branching:

Create and push a dedicated module branch like so:

cd ~/Desktop/travlr
git checkout -b module7
git add .
git commit -m "Module 7: Secure routes and JWT authentication"
git push origin module7
