import React from 'react';
import { Form, Button } from 'react-bootstrap';

function RequestForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div style={{ backgroundColor: 'lightgrey', padding: '40px', borderRadius: '30px' }}>
            <Form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '30%', marginRight: '10px', marginBottom: '10px' }}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" style={{ width: '100%', marginBottom: '10px' }} required />
                            <Form.Control.Feedback type="invalid">Valid name is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div style={{ width: '30%', marginLeft: '10px', marginBottom: '10px' }}>
                        <Form.Group controlId="productTeamName">
                            <Form.Label>Product Team Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Product Team name" style={{ width: '100%', marginBottom: '10px' }} />
                        </Form.Group>
                    </div>
                    <div style={{ width: '30%', marginRight: '10px', marginBottom: '10px' }}>
                        <Form.Group controlId="timesheetCode">
                            <Form.Label>Timesheet Code</Form.Label>
                            <Form.Control type="text" placeholder="Timesheet code" style={{ width: '100%', marginBottom: '10px' }} required />
                        </Form.Group>
                    </div> 
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '30%', marginRight: '10px', marginBottom: '10px' }}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" style={{ width: '100%', marginBottom: '10px' }} required />
                            <Form.Control.Feedback type="invalid">Valid email is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div style={{ width: '30%', marginLeft: '10px', marginBottom: '10px' }}>
                        <Form.Group controlId="supportTeamRequired">
                        <Form.Label>Support Team Required</Form.Label>
                        <Form.Control as="select" style={{ width: '100%', marginBottom: '10px' }}>
                            <option value ="">Select Team...</option>
                            <option value="System Build">System Build</option>
                            <option value="Infrastructure Services">Infrastructure Services</option>
                        </Form.Control>
                        </Form.Group>
                    </div>
                    <div style={{ width: '30%', marginLeft: '10px', marginBottom: '10px' }}>
                        <Form.Group controlId="skillsRequired">
                        <Form.Label>Skills Required</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter the skills that are required. For example SQL, or Linux" style={{ width: '100%', marginBottom: '10px' }} />
                        </Form.Group>
                    </div>
                </div>

                

                <Button variant="primary" type="submit" style={{ backgroundColor: 'black', color: 'white' }}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default RequestForm;