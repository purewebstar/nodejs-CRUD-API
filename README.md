# CRUD API DEMO
> Simple demonstration of Creating , Reading, Updating and Deleting Api data from MongoDb

## Prerequisite:
- [x] npm/nodejs latest version
- [x] REST Client Extension for Visual Studio OR POSTMAN

## Technologies used:
### 1. Backend
- Nodejs
- ExpressJs
- MongoDb
### 2. For Api testing
- Rest Client

## Dependency install
```
npm install --save
```
Dependencies are:
> express, cors, nodemon, mongoose, dotenv, helmet

## Run Project
```
npm run start
```
Or
```
nodemon app.js
```
## Rest Client Api testing (POSTMAN)

### Reading API ENDPOINTS
```rest
###
// Find all posts
GET http://localhost:4000/post
Content-Type: application/json

// Find post by Id
###
GET http://localhost:4000/post/:id
Content-Type: application/json

// Find post by title
###
GET http://localhost:4000/post/title/:title
Content-Type: application/json

###
```

### Creating API ENDPOINTS
```rest
###
// create post
POST http://localhost:4000/post
Content-Type: application/json

{
    "title": "CRUD",
    "description": "Performing a CRUD operation using Nodejs, ExressJs and MongoDb"
}

###
```

### Updating API ENDPOINTS
```rest
// update post
###
PUT http://localhost:4000/post/:id
Content-Type: application/json

{
     "title": "CRUD Operations",
     "description": "Designing Api's using NodeJs, ExpressJs and MongoDb"
}

###
```

### Deleting API ENDPOINTS
```rest
// delete post
###
DELETE http://localhost:4000/post/:id
Content-Type: application/json
```

