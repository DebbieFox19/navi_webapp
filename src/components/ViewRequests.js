import React, { Fragment, useEffect, useState } from "react";






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
                <table class="table table-hover table-responsive-md table align-middle table caption-top">
                    <caption><h2>List of Requests</h2></caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Team Name</th>
                            <th>Support Team Required</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>View Data</th>
                            <th>Delete Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(request => (
                            <tr key={request.id}>
                                <td>{request.id}</td>
                                <td>{request.product_team_name}</td>
                                <td>{request.support_team_required}</td>
                                <td>{request.priority}</td>
                                <td>{request.status}</td>
                                <td>{request.description}</td>
                                <td>
                                    <button>View</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => deleteRequest(request.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
};

export default ViewRequests;

//next steps
//create api request for get data based on id 
//assign to view so that it pulls data intop the form
//add form to bottom of page
//establish edit function
