# Basic Consumption Blog Frontend

This is a simple consumption blog frontend created in React with Vite for my [Blog API](https://github.com/SaraToth/blog-api) based on the [Odin Project Node.js and Express Blog API Lesson](https://www.theodinproject.com/lessons/node-path-nodejs-blog-api)

## Getting Started

First, you'll need to go ahead and set up the backend server [Blog API](https://github.com/SaraToth/blog-api) and follow all the directions in the README to get setup.

Once your backend server and local database is setup go ahead and fork a clone of this repository and clone to your local device and run the following to install all dependencies:
```
npm install
```

### Form Setup

In this project, you can find in the src/pages folder that the following pages have fetch requests to the Blog API server.

- Login.jsx
- Signup.jsx
- BlogHome.jsx
- BlogPost.jsx

You will need to doublecheck that the fetch requests are calling on the correct url and local port. You will also need to double check the CORS policy on your copy of the backend BLOG API and ensure that it is configured correctly to accept requests from your frontend.

### Run in browser

As per React default this project runs on PORT 5173

## Upcoming Features

This frontend was created specifically for the Blog API server that I previously created as a means to quickly put a visual to the server, and confirm the Blog API was production ready to use with frontend logic. As a result, some of the UI/UX designs for the different views have not been completely implemented. Although, the frontend functions as it should, without some of the final visual touches.

### Contributing to this project

In the future I plan to update the UI/UX design, and adjust the styles for this project. If you would like to propose design changes please fork a copy of this project and work on a seperate branch named "design" and send a pull request.

