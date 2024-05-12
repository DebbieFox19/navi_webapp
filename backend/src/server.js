//import fs from 'fs';
//import admin from 'firebase-admin';
import express from 'express';
import 'dotenv/config';
import bodyParser from "body-parser";
import pg from 'pg';
import { all } from 'axios';



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
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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


//ROUTES
//get requests

//get all requests
let allRequests = [];
db.query('SELECT * FROM requests', (err, res) => {  
    if (err) {
        console.log("Error executing query", err.stack)
    } else {
        allRequests = (res.rows);
    }


db.end();
});

export default allRequests;