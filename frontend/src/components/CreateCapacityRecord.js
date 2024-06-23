import React, { Fragment , useState} from 'react';
import { Form, Button } from 'react-bootstrap';


const CreateCapacityRequest = () => {

    const [team_id, setTeam_id] = useState('');
    const [team, setTeam] = useState('');
    const [day, setDay] = useState('');
    const [total_capacity, setTotal_capacity] = useState('');
    const [available_capacity, setAvailable_capacity] = useState('');
    const [booked_capacity, setBooked_capacity] = useState('');



        const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { team_id, team, day, total_capacity, available_capacity, booked_capacity };
            const response = await fetch("http://localhost:5000/api/capacitycreate", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            });
            
            window.location = "/Capacity";
            
            if (response.ok) {
            // Show success message to the user
            alert("Request created successfully!");
            // Clear the form
            setTeam_id('');
            setTeam('');
            setDay('');
            setTotal_capacity('');
            setAvailable_capacity('');
            setBooked_capacity('');

            } else {
            // Show error message to the user
            alert("Failed to create request. Please try again.");
            }
        } catch (err) {
            console.error(err.message);
        }
        }

  
        

    return (
        <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px', margin: '60px' }}>
            <Fragment>
                <Form onSubmit={handleSubmit}>
                    <p>Please fill in the available capacity for your team.</p>
                    <br />
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <Form.Group controlId="team">
                                <Form.Label><strong>Team</strong></Form.Label>
                                <Form.Control as="select"
                                    style={{ marginBottom: '10px' }}
                                    value={team}
                                    onChange={(e) => {
                                        setTeam(e.target.value);
                                        if (e.target.value === 'System Build') {
                                            setTeam_id('SB');
                                        } else if (e.target.value === 'Infrastructure Services') {
                                            setTeam_id('IS');
                                        } else {
                                            setTeam_id('');
                                        }
                                    }}
                                >
                                    <option value="">Select Team...</option>
                                    <option value="System Build">System Build</option>
                                    <option value="Infrastructure Services">Infrastructure Services</option>
                                </Form.Control>
                            </Form.Group>
                        </div>


                        <div className="col-md-4 mb-2">
                            <Form.Group controlId="day">
                                <Form.Label><strong>Date</strong></Form.Label>
                                <Form.Control type="date" dateformat="DD/MM/YYYY"
                                    placeholder="Select date"
                                    required style={{ marginBottom: '10px' }}
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Form.Group controlID="total_capacity">
                                <Form.Label><strong>Total Capacity</strong></Form.Label>
                                <Form.Control type="number"
                                    placeholder="Total Capacity"
                                    required style={{ marginBottom: '10px' }}
                                    value={total_capacity}
                                    onChange={(e) => setTotal_capacity(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-4 mb-2">
                            <Form.Group controlID="available_capacity">
                                <Form.Label><strong>Available Capacity</strong></Form.Label>
                                <Form.Control type="number"
                                    placeholder="Available Capacity"
                                    required style={{ marginBottom: '10px' }}
                                    value={available_capacity}
                                    onChange={(e) => setAvailable_capacity(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-4 mb-2">
                            <Form.Group controlID="booked_capacity">
                                <Form.Label><strong>Booked Capacity</strong></Form.Label>
                                <Form.Control type="number"
                                    placeholder="Booked Capacity"
                                    required style={{ marginBottom: '10px' }}
                                    value={booked_capacity}
                                    onChange={(e) => setBooked_capacity(e.target.value)}
                                />
                            </Form.Group>
                        </div>

                    </div>

                    <Button variant="primary" type="submit" style={{ backgroundColor: '#016236', color: 'white', marginBottom: '10px' }}>
                        Submit
                    </Button>

                </Form>
            </Fragment>
        </div>
    );
}

export default CreateCapacityRequest;
