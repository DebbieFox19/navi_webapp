const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");
const { format, parse } = require('date-fns');


// Middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(bodyParser.urlencoded({ extended: true }));




//ROUTES
//Create a request
app.post("/api/create", async (req, res) => {
    try {
        const { name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, hrs_day, description, status } = req.body;
        const newRequest = await pool.query(
            "INSERT INTO requests (name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, hrs_day, description, status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
            [name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, hrs_day, description, status]
        );

        res.json(newRequest.rows[0]);
        //console.log(newRequest.rows[0]);
    } catch (err) {
        console.error(err.message);
    }

});

//GET all requests

app.get("/api/requests", async (req, res) => {
    try {
        const allRequests = await pool.query("SELECT * FROM requests ORDER BY id ASC");
       // console.log(allRequests.rows);

        const formattedRequests = allRequests.rows.map(request => {
            return {
                ...request,
                start_date: format(new Date(request.start_date), 'yyyy-MM-dd'),
            };
        });
        res.json(formattedRequests);
       // console.log(formattedRequests);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
    }
});


//Update a request and deduct hours if approved
app.put("/api/requests/:id", async (req, res) => {
    const requestID = req.params.id;
    const { name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, hrs_day, description, status } = req.body;

    try {
        const request = await pool.query("SELECT * FROM requests WHERE id = $1", [requestID]);
//console.log('Request:', request.rows); // Debugging line

        if (!request.rows.length) {
            return res.status(404).send('Request not found');
        }

        if (status === 'Approved') {

            const capacity = await pool.query("SELECT * FROM capacity WHERE team = $1 AND day = $2", [support_team_required, start_date]);
//console.log('Capacity:', capacity.rows); // Debugging line

            if (!capacity.rows.length) {
                return res.status(404).send('Capacity not found');
            }

            const newAvailableCapacity = capacity.rows[0].available_capacity - hrs_day;
            const newBookedCapacity = capacity.rows[0].booked_capacity + hrs_day;
//console.log('New available capacity:', newAvailableCapacity); // Debugging line
//console.log('New booked capacity:', newBookedCapacity); // Debugging line

            if (newAvailableCapacity < 0) {
                return res.status(400).send('Not enough available hours');
            }

            await pool.query("UPDATE capacity SET available_capacity = $1, booked_capacity = $4 WHERE team = $2 AND day = $3", [newAvailableCapacity, support_team_required, start_date, newBookedCapacity]);
        }

        const updateRequest = `UPDATE requests SET name = $1, product_team_name = $2, timesheet_code = $3, email = $4, support_team_required = $5, skills_required = $6, support_type = $7, priority = $8, start_date = $9, hrs_day = $10, description = $11, status = $12 WHERE id = $13`;
        const values = [name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, hrs_day, description, status, requestID];
        await pool.query(updateRequest, values);

        res.json({ message: 'Request updated' });
    } catch (error) {
        console.error('Error updating request:', error);
        res.status(500).send('Internal server error');
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


///CAPACITY
//GET Capacity
app.get("/api/capacity", async (req, res) => {
    try {
        const allCapacity = await pool.query("SELECT * FROM capacity ORDER BY id ASC");
        res.json(allCapacity.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get capacity by team 
app.get("/api/capacity/:team_id", async (req, res) => {
    try {
        const { team_id } = req.params;
        const capacity = await pool.query("SELECT * FROM capacity WHERE team_id = $1", [team_id]);
        res.json(capacity.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Create a Capacity record
app.post("/api/capacitycreate", async (req, res) => {
    try {
        const { team_id, team, day, total_capacity, available_capacity, booked_capacity } = req.body;
        const newRecord = await pool.query(
            "INSERT INTO capacity (team_id, team, day, total_capacity, available_capacity, booked_capacity) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [team_id, team, day, total_capacity, available_capacity, booked_capacity]
        );

        res.json(newRecord.rows[0]);
    } catch (err) {
        console.error(err.message);
    }

});

//UPDATE a Capacity Record
app.put("/api/capacity/:id", async (
    req, res) => {
    try {
        const { id } = req.params;
        const { team_id, team, day, total_capacity, available_capacity, booked_capacity } = req.body;
        const updateRecord = await pool.query(
            "UPDATE capacity SET team_id = $1, team = $2, day = $3, total_capacity = $4, available_capacity = $5, booked_capacity = $6 WHERE id = $7",
            [team_id, team, day, total_capacity, available_capacity, booked_capacity, id]
        );

        res.json("Record was updated");
    } catch (err) {
        console.error(err.message);
    }
});

//DELETE a record
app.delete("/api/capacity/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRecord = await pool.query("DELETE FROM capacity WHERE id = $1", [id]);
        res.json("Record was deleted");
    } catch (err) {
        console.error(err.message);
    }
});


//HOMEPAGE SUMMARY DATA

//Get Count of pending requests by team and priority
app.get("/api/summary", async (req, res) => {
    try {
        const summary = await pool.query("SELECT COUNT(status) as Pending ,priority ,support_team_required FROM requests WHERE status = 'Pending' group by priority, support_team_required");
        res.json(summary.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get Count of records by support_team_required
app.get("/api/summary/:support_team_required", async (req, res) => {
    try {
        const summary = await pool.query("SELECT COUNT(id) as count ,support_team_required FROM requests group by support_team_required")
        res.json(summary.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET Capacity info by Date selected
app.post('/api/date', async (req, res) => {
    const { date } = req.body;
    console.log('Received date:', date); // Debugging line
  
    if (!date) {
      return res.status(400).send('Date is required');
    }
  
    try {
      const query = 'SELECT * FROM capacity WHERE day = $1::date';
      const result = await pool.query(query, [date]);
  
      res.json(result.rows);
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Internal server error');
    }
  });

//GET Capacity info by Team selected
app.post('/api/team', async (req, res) => {
    const { team } = req.body;
    console.log('Received team:', team); // Debugging line
  
    if (!team) {
      return res.status(400).send('Team is required');
    }
  
    try {
      const query = 'SELECT * FROM capacity WHERE team = $1 ORDER BY day ASC';
      const result = await pool.query(query, [team]);
  
      res.json(result.rows);
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Internal server error');
    }
  });


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

