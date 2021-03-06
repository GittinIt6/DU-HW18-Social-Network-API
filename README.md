# DU-HW18-Social-Network-API

DU Coding Bootcamp Homework 18: NoSQL: Social Network API

# node.js application with SQL (MongoDB) connectivity
This is a node.js script using **express** relying on NPM package **mongoose** to access a MongoDB server as defined by the connection in the /config/connection.js and environment variables (.env) using **dotenv**.

Github Repository Address: 

## Live App
See live deployed app at 
>**Heroku**: This site is currently live on Heroku using **MongoDB Atlas**.

## Purpose

This application is specific to anyone that wants to view and post items to a MongoDB database via API.

## Instructions for GitHub developer use
1. Ensure you have downloaded and installed node.js and have rebooted your system (if Windows)
2. Clone repository to your system.
3. From a terminal, ensure you are in the index.js directory
4. Update the /config/connection.js to include your database connection info as well as your envrionment variables (.env).
5. Run:
~~~
npm i
npm run seed
npm start
~~~

## Audience

The intended audience is an individual that would like to use a Social Network API.

&#x2611; **Developer** Technical Knowledge:
A developer editing this code does need to have a technical background, and *should* understand node.js, express, and MYSQL capabilities.

## API
| Path                       | Method | Action             | Requires               |
|----------------------------|--------|--------------------|------------------------|
| /api/users                 | GET    | return users       |                        |
| /api/thoughts              | GET    | return thoughts    |                        |
| /api/users/:id             | GET    | return user        | _id of user            |
| /api/thoghts/:id           | GET    | return thought     | _id of thought         |
| /api/users/:id             | DEL    | delete a user      | _id of user            |
| /api/users/:id             | PUT    | update a user      | _id of user            |
| /api/users                 | POST   | create new user    | JSON - username, email |
| /api/users/:id/friends/:id | POST   | add friend to user | user _id, friend _id   |
| /api/users/:id/friends/:id | DEL    | delete a post      | user _id, friend _id   |

## Technical Detail

This application uses node.js with **mongoose**, **dotenv**, and **express**.

The files are configured as follows:
```
Root Directory/
|
??? --index.js
??? --package.json
??? --.gitignore
??? --readme.md
??? --.envExample (to be updated by developer)
??? --.env (to be created locally)
|
????????????config/ (folder)
|
????????????controllers/ (folder)
|
????????????db/ (folder)
|
????????????models/ (folder)
|
????????????routes/ (folder)
   |
   ?????????api (folder)

```
>**node.js**: This site uses node.js <https://nodejs.org/>

>**mongoose**: This site uses mongoose <https://mongoosejs.com/>

>**dotenv**: This site uses dotenv <https://www.npmjs.com/package/dotenv>

>**express**: This site uses express <https://expressjs.com/>

### Screenshot:

![screenshot](./git-files/screenshot.PNG)

## Revision History 

1. This application was created in May 2022 as part of a bootcamp assignment. It was created from scratch with requirements provided by the instructor.