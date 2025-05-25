# Travlr Getaways - CS465 Full Stack Development

---

## Module 3: Dynamic Handlebars Views with JSON Integration

**Purpose:**  
Enhance the customer-facing site by integrating a JSON data layer to dynamically render content using Handlebars (HBS), while preserving the existing site design and layout.

**Completed Tasks:**
- Created a `data/trips.json` file containing structured trip data for the Travel page.
- Converted `index.html` to `travel.hbs`, maintaining full styling and layout.
- Replaced static content with `{{#each trips}}` in `travel.hbs` to dynamically render trip listings.
- Created reusable partials: `header.hbs` and `footer.hbs`.
- Updated `app.js` to register HBS partials and route views from `app_server/views`.
- Built a new controller (`travel.js`) that loads and parses `trips.json`.
- Updated routing logic in `index.js` to serve `/travel` via MVC.
- Configured `package.json` with a `start` script (`"start": "node app.js"`).
- Verified functionality locally using `npm start` and browser inspection.
- Pushed final changes to GitHub on the `module3` branch.

**How to Run:**
Navigate to the project directory:
   ```bash
   cd travlr

    Install dependencies:

npm install

Start the server:

    npm start

    Open your browser:
    http://localhost:3000

Reflection:
This module emphasized integrating JSON with templating engines and ensuring maintainability through reusable partials. I preserved the original UI while rendering dynamic content from structured data. This experience reinforced key skills in Express routing, template logic, and data-driven rendering.

GitHub Repository:

    Module 1: https://github.com/synthesoul/CS465/tree/module1

    Module 2: https://github.com/synthesoul/CS465/tree/module2

    Module 3: https://github.com/synthesoul/CS465/tree/module3


