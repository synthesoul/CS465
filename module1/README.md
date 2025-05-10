CS 465 – Module 1: Static Express Website

This is the baseline Express website setup for SNHU's CS 465 Full Stack Development course, Module 1 (Assignment 1-6). It uses Node.js and Express with Handlebars (HBS) as the templating engine.

Project Structure:
module1/
├── app.js
├── public/
│   ├── css/
│   ├── images/
│   └── *.html
├── views/
├── routes/
├── bin/
└── ...

How to Run the Project:
1. Navigate into the module folder:
   cd module1

2. Install dependencies:
   npm install

3. Start the server:
   DEBUG=cs465:* npm start

4. Open your browser and go to:
   http://localhost:3000

Completed Features:
- Express app scaffolded using express-generator
- Static .html, .css, and image files copied into public/
- Folder renamed from stylesheets to css for proper asset loading
- App tested and accessible via browser on port 3000
- Code committed and pushed to GitHub on the module1 branch

Module 1 Reflection:
This module introduced me to setting up a Node.js and Express development environment from scratch. I learned how to:
- Install dependencies using npm
- Generate an Express app with Handlebars templating
- Manage static files and public assets
- Use Git and GitHub to track and push changes
- Troubleshoot issues on Linux (Void Linux in my case)

It was helpful to walk through each step using the CLI. I also gained confidence working in a Linux terminal and managing files with shell commands.

GitHub Repository:
https://github.com/synthesoul/CS465/tree/module1


CHRISTIAN BUSCA
