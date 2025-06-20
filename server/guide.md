### These will be backend of our project
---
1. Create server.js main file of our backend
2. Packages:
    - express
    - mongoose
    - cors (to join front and back end)
    - dotenv (to use environment variable in our backend)
    - jsonwebtoken (to authenticate our users)
    - multer (to upload file like blog image)
    - nodemon (it should be install only for dev dependencies)

2. setup package with type module and script with nodemon server.js
3. we will create middleware for app and pass cors (to connect f&b) and json so that every request pass though json method

4. first setup basic express app with get request of api is working
5. connect backend with mongoose 
6. Create a function that will connect to mongodb
7. create controller folder which will have all controller function to control api
8. create models folder to store all the mongodb models to store data on mongodb 
9. create route folders
10. create middleware where functions will there run before getting into controllers

11. created a controller to look after the admin login and then create a route for that
12. with the help of hopscotch check the endpoint dor admin login
13. to store any data in mongodb we have to create models
14. after that create blog.controller to add blog before adding data in db we will use imagekit for images to store in cloud