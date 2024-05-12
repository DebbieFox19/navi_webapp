import React from 'react';
import { useState, useEffect } from 'react';

function RequestManagement() {
    const [allRequests, setAllRequests] = useState([]); // Use state to store the requests

    useEffect(() => {
        // Fetch data from the database
        fetch('your-api-endpoint')
            .then(response => response.json())
            .then(data => setAllRequests(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Request Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        {/* Add more table headers for other columns */}
                    </tr>
                </thead>
                <tbody>
                    {allRequests.map((request) => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.title}</td>
                            <td>{request.description}</td>
                            {/* Add more table cells for other columns */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default RequestManagement;