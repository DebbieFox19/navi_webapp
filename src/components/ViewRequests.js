import React, { Fragment, useEffect, useState } from "react";
import UpdateRequest from "./UpdateRequest";







//View request function

const ViewRequests = () => {

    const [requests, setRequests] = useState([]);

    const getRequests = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/requests");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
            console.log("Fetched requests:", jsonData); // Log the fetched data
            setRequests(jsonData);
        } catch (err) {
            console.error("Error fetching requests:", err.message);
        }
    };

    useEffect(() => {
        getRequests();
    }, []);



    //Delete request function

const deleteRequest = async (id) => {
    try {
        const deleteResponse = await fetch(`http://localhost:5000/api/requests/${id}`, {
            method: "DELETE",
        });
        if (!deleteResponse.ok) {
            throw new Error(`HTTP error! status: ${deleteResponse.status}`);
        }
        setRequests(requests.filter(request => request.id !== id));
    } catch (err) {
        console.error("Error deleting request:", err.message);
    }
};



    return (
        <Fragment>
            <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px', margin: '60px' }}>
                <div style={{overflowX: 'auto'}}>
                <table class="table table-hover table-responsive-md table align-middle table caption-top">
                    <caption><h2>List of Requests</h2></caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Product Team Name</th>
                            <th>Timesheet Code</th>
                            <th>Email</th>
                            <th>Support Team Required</th>
                            <th>Skills Required</th>
                            <th>Support Type</th>
                            <th>Priority</th>
                            <th>Start Date</th>
                            <th>Hours Required</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>View Data</th>
                            <th>Delete Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(request => (
                            <tr key={request.id}>
                                <td>{request.id}</td>
                                <td>{request.name}</td>
                                <td>{request.product_team_name}</td>
                                <td>{request.timesheet_code}</td>
                                <td>{request.email}</td>
                                <td>{request.support_team_required}</td>
                                <td>{request.skills_required}</td>
                                <td>{request.support_type}</td>
                                <td>{request.priority}</td>
                                <td>{request.start_date}</td>
                                <td>{parseInt(request.hrs_day)}</td>
                                <td>{request.description}</td>
                                <td>{request.status}</td>
                                <td>
                                    <UpdateRequest request={request} />
                                </td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => deleteRequest(request.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
           
        </Fragment>
    )
};

export default ViewRequests;
