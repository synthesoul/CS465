Module 2: MVC Architecture with Dynamic Views

Purpose:
Refactor the application to implement a model-view-controller structure and render dynamic content using Handlebars.
Completed Tasks

    Created an app_server folder with routes, controllers, and views.

    Implemented the /travel route using MVC.

    Converted travel.html into travel.hbs and rendered it with dynamic title and heading.

    Moved static assets into public/css and public/images.

    Configured the root route / to redirect to /travel.

    Verified application behavior with curl and browser.

    Pushed final version to GitHub on the module2 branch.

How to Run

    Navigate to the module2 project folder:

cd travlr

Install dependencies:

npm install

Start the server:

node app.js

Visit in browser:

    http://localhost:3000

Reflection

This module emphasized architectural structure and dynamic rendering. I transitioned from static to template-based rendering using MVC principles. I also reinforced version control habits and deployment testing.

GitHub Repository

    Module 1: https://github.com/synthesoul/CS465/tree/module1

    Module 2: https://github.com/synthesoul/CS465/tree/module2
    
