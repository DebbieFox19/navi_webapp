//import fs from 'fs';
//import admin from 'firebase-admin';
import express from 'express';
import 'dotenv/config';
import { db, connectToDb } from './db.js';


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

// ROUTES
// get requests    
 







//database connection
connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
})