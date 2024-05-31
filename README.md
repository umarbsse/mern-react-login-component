# Mern Stack login component


This project was bootstrapped with Mern Stack. Please install the packages bellow


# Express.js packages


### `npm init `
After giving above command enter basic details

### `npm i express `
Install express server

### `npm i mongoose `
Install abstraction layer for mongo db connection

### `npm i -D nodemon `
-D shows Dev dependency

### `npm install --save express-validator `
Used for backend input data validation

### `npm i bcryptjs `
Used for password salt and pepper

### `npm i jsonwebtoken `
Used for web token generation in express.js

### `npm i cors `
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

# React.js packages


### `npx create-react-app my-app `
replace my-app with directory name
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




### `npm i react-router-dom `
The react-router-dom package contains bindings for using React Router in web applications.

### `npm i concurrently `
Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.

insert the following line in the script block of package.json


"scripts": {
    "both": "concurrently \"npm run start\" \"nodemon backend/index.js\""
  },