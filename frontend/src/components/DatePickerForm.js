import React, { useState } from 'react';

const DatePickerForm = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting date:', date); // Debugging line

    try {
      const response = await fetch('/api/date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date }),
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

  return (
    <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px', margin: '60px' }}>
      <h1 style={{ textAlign: 'center' }}>Capacity Checker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="datepicker" style={{ display: 'block', marginBottom: '10px', marginRight: '5px' }}><strong>Select Date:</strong></label>
        <input
          type="date"
          id="datepicker"
          name="datepicker"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginBottom: '10px', marginRight: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
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
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.team}>
                <td>{row.team}</td>
                <td>{new Date(row.day).toLocaleDateString('en-GB')}</td>
                <td>{row.total_capacity}</td>
                <td>{row.available_capacity}</td>
                <td>{row.booked_capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Data available</p>
      )}
    </div>
  );
};

export default DatePickerForm;
