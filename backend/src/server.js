const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");



// Middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(bodyParser.urlencoded({ extended: true }));




//ROUTES
//Create a request
app.post("/api/create", async (req, res) => {
    try {
        const { name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, end_date, hrs_day, description } = req.body;
        const newRequest = await pool.query(
            "INSERT INTO requests (name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, end_date, hrs_day, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
            [name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, end_date, hrs_day, description]
        );

        res.json(newRequest.rows[0]);
    } catch (err) {
        console.error(err.message);
    }

});

//GET all requests
app.get("/api/requests", async (req, res) => {
    try {
        const allRequests = await pool.query("SELECT * FROM requests");
        res.json(allRequests.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET a request
app.get("/api/requests/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const request = await pool.query("SELECT * FROM requests WHERE id = $1", [id]);
        res.json(request.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a request by Support Team
//UPDATE a request
app.put("/api/requests/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, end_date, hrs_day, description } = req.body;
        const updateRequest = await pool.query(
            "UPDATE requests SET name = $1, product_team_name = $2, timesheet_code = $3, email = $4, support_team_required = $5, skills_required = $6, support_type = $7, priority = $8, start_date = $9, end_date = $10, hrs_day = $11, description = $12 WHERE id = $13",
            [name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, end_date, hrs_day, description, id]
        );

        res.json("Request was updated");
    } catch (err) {
        console.error(err.message);
    }
});
//DELETE a request
app.delete("/api/requests/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRequest = await pool.query("DELETE FROM requests WHERE id = $1", [id]);
        res.json("Request was deleted");
    } catch (err) {
        console.error(err.message);
    }
});



app.listen(5000, () => {
    console.log("Server is running on port 5000");
});





//everything above here - following tutorial - https://www.youtube.com/watch?v=ldYcgPKEZC8
//everything below here is to be rewritten 

