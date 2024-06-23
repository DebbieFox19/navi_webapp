import React, { useState } from 'react';
import UpdateRecord from "./UpdateCapacity";


const TeamPickerForm = () => {
  const [team, setTeam] = useState('');
  const [data, setData] = useState([]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting team:', team); // Debugging line

    try {
      const response = await fetch('/api/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data received:', result); // Debugging line
        setData(result);
      } else {
        console.error('Error submitting date');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
    <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px', margin: '60px' }}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="team" style={{ display: 'block', marginBottom: '10px', marginRight: '5px' }}><strong>Please Select a Team:</strong></label>
            <select
                id="team"
                value={team}
                onChange={(event) => setTeam(event.target.value)}
                required
                style={{ marginBottom: '10px', marginRight: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
                <option value="">Select Team</option>
                <option value="System Build">System Build</option>
                <option value="Infrastructure Services">Infrastructure Services</option>
            </select>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <br />
        {data.length > 0 ? (
            <table className="table table-hover table-responsive-md table align-middle table caption-top">
                <thead>
                    <tr>
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
                    {data.map((record) => (
                        <tr key={record.id}>
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
        ) : (
            <div>
            <p>Please select a team to see capacity information. </p>
            <p>If you have already selected a team, then there may not be any data available for the selected day.</p>
            </div>
        )}
    </div>
);
};

export default TeamPickerForm;
