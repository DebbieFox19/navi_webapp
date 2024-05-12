//import fs from 'fs';
//import admin from 'firebase-admin';
import express from 'express';
import 'dotenv/config';
import pg from 'pg';



//call credentials for firebase
//const credentials = JSON.parse(
 //   fs.readFileSync('./credentials.json')
//);
//admin.initializeApp({
//    credential: admin.credential.cert(credentials),
//});

//express app
const app = express();
app.use(express.json()); 


//middleware

app.use(async (req, res, next) => {
    const { authtoken } = req.headers;

    if (authtoken) {
        try {
            req.user = await admin.auth().verifyIdToken(authtoken);
        } catch (e) {
            return res.sendStatus(400);
        }
    }

    req.user = req.user || {};

    next();
});

//database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Navi",
    password: "N4viP0stgres",
    port: 5432,
});

db.connect();
console.log('connected to database');

//ROUTES
//get requests

//get all requests
db.query('SELECT * FROM requests', (err, res) => {  
    if (err) {
        console.log("Error executing query", err.stack)
    } else {
        console.log(res.rows)
    }

db.end();
});