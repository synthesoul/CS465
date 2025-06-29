CS 465 Full Stack Development Final Project - Travlr
Architecture

Throughout this course, I worked with different types of frontend development technologies. Initially, I used static HTML and JavaScript rendered through the Express framework, which allowed me to quickly scaffold and visualize the application’s structure. Later, I transitioned to using Handlebars for templating, which introduced modular views and dynamic rendering on the server side.

Eventually, the project evolved into a Single Page Application (SPA) using Angular. This modern frontend architecture improved performance and user experience by loading data asynchronously via RESTful API calls instead of reloading entire pages.

The backend used a NoSQL MongoDB database because of its flexibility and document-based structure. MongoDB works well with JavaScript and Mongoose, and it allowed me to rapidly develop and iterate on the data model without complex migrations.
Functionality

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is distinct from JavaScript in that it is purely data—no functions or logic. JSON served as the communication bridge between the frontend Angular SPA and the backend Express API. Data sent and received from the API was structured as JSON, enabling smooth parsing and rendering on both ends.

Throughout the project, I refactored various parts of the code. One example was creating reusable UI components in Angular for displaying trip listings. These components enhanced maintainability and scalability while also ensuring consistency in the user interface. Reusability not only saved development time but also reduced the chance of bugs.
Testing

In building and testing the application, I used Postman to test RESTful API endpoints for both trip data and user authentication. Each endpoint had different request types—GET, POST, PUT, DELETE—depending on its function. Adding JWT-based security in Module 7 made testing more complex, as it required token-based headers for accessing protected routes.

This taught me how real-world applications validate users, store sessions securely, and restrict access to specific functionalities. API testing included ensuring proper responses to both valid and invalid inputs and confirming that only authorized users could access the admin panel.
Reflection

This course significantly contributed to my growth as a full stack developer. I learned how to architect a modern MEAN stack application from the ground up and deploy it securely. I developed critical skills in Express routing, Angular component design, MongoDB schema modeling, and API development.

Most importantly, I became proficient in using Git and GitHub for version control, branching, and collaborative workflows. These are key skills for any software developer and have helped prepare me for real-world team environments.

I now feel more confident and marketable as a developer ready to build and maintain scalable full stack applications.
