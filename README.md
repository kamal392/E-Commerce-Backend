# E-Commerce-Backend
This is "E-commerce-backend" an application built with node.js , express.js, MysQL , Sequlize. 
The Mentioned app will get connected to MySQL database using sequelize by providing database name , user name and password.
Once will have the successful DB connection , database will get created and seeded with test data after running schema and seed command.
Once server will get started then the user can check the Api routes (GET, POST , UPDATE and DELETE.) in insomanina for categories,products and tags.

NOTE: Please refer Walkthrough_video directory to watch working app .

Please follow the steps in order to run the application:-

1.	npm init

2.	npm install mysql2

3.	npm install sequelize

4.	npm install dotenv

5.    Switch to MySQL terminal and run schema.sql with the help of following command:
      source db/schema.sql

6.    Switch to bash terminal and run the follwing command:-

      npm run seed

7.	npm start

