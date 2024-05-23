import React, { Fragment, useEffect, useState } from "react";
import UpdateRecord from "./UpdateCapacity";






//View Capacity function

const ViewCapacity = () => {

    const [capacity, setCapacity] = useState([]);

    const getCapacity = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/capacity");
            const jsonData = await response.json();
            
            setCapacity(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getCapacity();
    } , []);
    



    //Delete record function

const deleteRecord = async (id) => {
    try {
        const deleteRecord = await fetch(`http://localhost:5000/api/capacity/${id}`, {
            method: "DELETE"
        });

        window.location = "/Capacity";
    } catch (err) {
        console.error(err.message);
    }
}




    return (
        <Fragment>
            <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px', margin: '60px' }}>
                <table class="table table-hover table-responsive-md table align-middle table caption-top">
                    <caption><h2>Capacity</h2></caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Team</th>
                            <th>Date</th>
                            <th>Total Capacity</th>
                            <th>Available Capacity</th>
                            <th>Booked Capacity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {capacity.map(record => (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.team}</td>
                                <td>{new Date(record.day).toLocaleDateString('en-GB')}</td>
                                <td>{parseInt(record.total_capacity)}</td>
                                <td>{parseInt(record.available_capacity)}</td>
                                <td>{parseInt(record.booked_capacity)}</td>
                                <td>
                                <UpdateRecord record={record} />
                                </td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => deleteRecord(record.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
};

export default ViewCapacity;

//next steps
//create api request for get data based on id 
//assign to view so that it pulls data intop the form
//add form to bottom of page
//establish edit function
