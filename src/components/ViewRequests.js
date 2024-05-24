import React, { Fragment, useEffect, useState } from "react";
import UpdateRequest from "./UpdateRequest";






//View request function

const ViewRequests = () => {

    const [requests, setRequests] = useState([]);

    const getRequests = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/requests");
            const jsonData = await response.json();
            setRequests(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getRequests();
    } , []);



    //Delete request function

const deleteRequest = async (id) => {
    try {
        const deleteRequest = await fetch(`http://localhost:5000/api/requests/${id}`, {
            method: "DELETE"
        });

        window.location = "/RequestManagement";
    } catch (err) {
        console.error(err.message);
    }
}




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
                                <td>{new Date(request.start_date).toLocaleDateString('en-GB')}</td>
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
