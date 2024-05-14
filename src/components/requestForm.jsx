import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const RequestForm = () => {
const [name, setName] = useState('');
const [product_team_name, setProduct_team_name] = useState('');
const [timesheet_code, setTimesheet_code] = useState('');
const [email, setEmail] = useState('');
const [support_team_required, setSupport_team_required] = useState('');
const [skills_required, setSkills_required] = useState('');
const [support_type, setSupport_type] = useState('');
const [priority, setPriority] = useState('');
const [start_date, setStart_date] = useState('');
const [end_date, setEnd_date] = useState('');
const [hrs_day, setHrs_day] = useState('');
const [description, setDescription] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const formData = {  name, 
                            product_team_name, 
                            timesheet_code, 
                            email, 
                            support_team_required, 
                            skills_required, 
                            support_type, 
                            priority, 
                            start_date, 
                            end_date, 
                            hrs_day, 
                            description 
                        };
        ;
    }

    return (
        <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px' }}>
            <Form onSubmit={handleSubmit}>
            <p>Please capture as much information as possible in the form to help the allocated team deal with your request.</p>
            <br />
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Form.Group controlId="name">
                            <Form.Label><strong>Name</strong></Form.Label>
                            <Form.Control type="text" 
                                          placeholder="Enter your name" 
                                          required style={{ marginBottom: '10px' }}
                                          value = {name}
                                          onChange = {(e) => setName(e.target.value)}

                            />
                            <Form.Control.Feedback type="invalid">Valid name is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    
                    <div className="col-md-4 mb-3">
                        <Form.Group controlId="product_team_name">
                            <Form.Label><strong>Product Team Name</strong></Form.Label>
                            <Form.Control   type="text" 
                                            placeholder="Enter your Product Team name" 
                                            style={{ marginBottom: '10px' }} 
                                            value = {productTeamName}
                                            onChange = {(e) => setProduct_team_name(e.target.value)}
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-3">
                        <Form.Group controlId="timesheet_code">
                            <Form.Label><strong>Timesheet Code</strong></Form.Label>
                            <Form.Control   type="text" 
                                            placeholder="Timesheet code" 
                                            required style={{ marginBottom: '10px' }} 
                                            value = {timesheetCode}
                                            onChange = {(e) => setTimesheet_code(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Form.Group controlId="email">
                            <Form.Label><strong>Email</strong></Form.Label>
                            <Form.Control   type="email" 
                                            placeholder="Enter your email" 
                                            required style={{ marginBottom: '10px' }} 
                                            value = {email}
                                            onChange = {(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Valid email is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-3">
                        <Form.Group controlId="support_team_required">
                            <Form.Label><strong>Support Team Required</strong></Form.Label>
                            <Form.Control as="select" style={{ marginBottom: '10px' }}>
                                <option value="">Select Team...</option>
                                <option value="System Build">System Build</option>
                                <option value="Infrastructure Services">Infrastructure Services</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-3">
                        <Form.Group controlId="skills_required">
                            <Form.Label><strong>Skills Required</strong></Form.Label>
                            <Form.Control   as="textarea" 
                                            rows={3} 
                                            placeholder="Enter the skills that are required. For example SQL, or Linux" 
                                            style={{ marginBottom: '10px' }} 
                                            value = {skillsRequired}
                                            onChange = {(e) => setSkills_required(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="support_type">
                            <Form.Label><strong>Support Type</strong></Form.Label>
                            <Form.Control as="select" style={{ marginBottom: '10px' }}>
                                <option value="">Select Support Type...</option>
                                <option value="AdHoc">AdHoc</option>
                                <option value="Planned">Planned</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="priority">
                            <Form.Label><strong>Priority</strong></Form.Label>
                            <Form.Control as="select" style={{ marginBottom: '10px' }}>
                                <option value="">Select Priority...</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Critical">Critical</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="start_date">
                            <Form.Label><strong>Start Date</strong></Form.Label>
                            <Form.Control   type="date" 
                                            placeholder="Select start date" 
                                            required style={{ marginBottom: '10px' }} 
                                            value = {startDate}
                                            onChange = {(e) => setStart_date(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Start date is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="end_date">
                            <Form.Label><strong>End Date</strong></Form.Label>
                            <Form.Control   type="date" 
                                            placeholder="Select end date" 
                                            required style={{ marginBottom: '10px' }}
                                            value = {endDate}
                                            onChange = {(e) => setEnd_date(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">End date is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="hrs_day">
                            <Form.Label><strong>Hours per Day</strong></Form.Label>
                            <Form.Control as="select" style={{ marginBottom: '10px' }}>
                                <option value="">Select Hrs/Day...</option>
                                <option value="upTo1">Up to 1</option>
                                <option value="upTo2">Up to 2</option>
                                <option value="upTo3">Up to 3</option>
                                <option value="upTo4">Up to 4</option>
                                <option value="upTo5">Up to 5</option>
                                <option value="fullDay">Full Day</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 mb-3">
                        <Form.Group controlId="description">
                            <Form.Label><strong>Description</strong></Form.Label>
                            <Form.Control   as="textarea" 
                                            rows={3} 
                                            placeholder="Enter a description of the issue" 
                                            required style={{ marginBottom: '10px' }} 
                                            value = {description}
                                            onChange = {(e) => setDescription(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Description is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                </div>
                <Button variant="primary" type="submit" style={{ backgroundColor: '#016236', color: 'white', marginBottom: '10px' }}>
                    Submit
                </Button>
                <p>Once you have submitted your request, it will be sent to the Head of the specified department to approve.</p>

            </Form>
        </div>
    );
}

export default RequestForm;
