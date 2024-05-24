import React, { Fragment , useState} from 'react';
import { Form, Button } from 'react-bootstrap';


const CreateRequestForm = () => {
const [name, setName] = useState('');
const [product_team_name, setProduct_team_name] = useState('');
const [timesheet_code, setTimesheet_code] = useState('');
const [email, setEmail] = useState('');
const [support_team_required, setSupport_team_required] = useState('');
const [skills_required, setSkills_required] = useState('');
const [support_type, setSupport_type] = useState('');
const [priority, setPriority] = useState('');
const [start_date, setStart_date] = useState('');
const [hrs_day, setHrs_day] = useState('');
const [description, setDescription] = useState('');
const [status, setStatus] = useState('Pending');


        const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {name, product_team_name, timesheet_code, email, support_team_required, skills_required, support_type, priority, start_date, hrs_day, description, status};
            const response = await fetch("http://localhost:5000/api/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            });
            
            if (response.ok) {
            // Show success message to the user
            alert("Request created successfully!");
            // Clear the form
            setName('');
            setProduct_team_name('');
            setTimesheet_code('');
            setEmail('');
            setSupport_team_required('');
            setSkills_required('');
            setSupport_type('');
            setPriority('');
            setStart_date('');
            setHrs_day('');
            setDescription('');
            setStatus('Pending');
            } else {
            // Show error message to the user
            alert("Failed to create request. Please try again.");
            }
        } catch (err) {
            console.error(err.message);
        }
        }

  
        

    return (
        
        <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px' }}>
            <Fragment>
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
                                            value = {product_team_name}
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
                                            value = {timesheet_code}
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
                            <Form.Control as="select" 
                                                style={{ marginBottom: '10px' }}
                                                value={support_team_required}
                                                onChange={(e) => setSupport_team_required(e.target.value)}
                            >
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
                                            value = {skills_required}
                                            onChange = {(e) => setSkills_required(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="support_type">
                            <Form.Label><strong>Support Type</strong></Form.Label>
                            <Form.Control   as="select" 
                                            style={{ marginBottom: '10px' }}
                                            value={support_type}
                                            onChange={(e) => setSupport_type(e.target.value)}
                            >
                                <option value="">Select Support Type...</option>
                                <option value="AdHoc">AdHoc</option>
                                <option value="Planned">Planned</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="priority">
                            <Form.Label><strong>Priority</strong></Form.Label>
                            <Form.Control   as="select" 
                                            style={{ marginBottom: '10px' }}
                                            value={priority}
                                            onChange={(e) => setPriority(e.target.value)}
                            >
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
                            <Form.Control   type="date" dateformat="DD/MM/YYYY"
                                            placeholder="Select start date" 
                                            required style={{ marginBottom: '10px' }} 
                                            value = {new Date(start_date).toLocaleDateString('en-GB')}
                                            onChange = {(e) => setStart_date(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Start date is required</Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="col-md-4 mb-2">
                        <Form.Group controlId="hrs_day">
                            <Form.Label><strong>Hours per Day</strong></Form.Label>
                            <Form.Control   as="select" 
                                            style={{ marginBottom: '10px' }}
                                            value={hrs_day}
                                            onChange={(e) => setHrs_day(e.target.value)}
                            >
                                <option value="">Select Hrs/Day...</option>
                                <option value="1">Up to 1</option>
                                <option value="2">Up to 2</option>
                                <option value="3">Up to 3</option>
                                <option value="4">Up to 4</option>
                                <option value="5">Up to 5</option>
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
                    <div className="col-md-4 mb-2">
                        <Form.Group controlID="status">
                            <Form.Label><strong>Status</strong></Form.Label>
                            <Form.Control   as="select" 
                                            style={{ marginBottom: '10px' }}
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <Button variant="primary" type="submit" style={{ backgroundColor: '#016236', color: 'white', marginBottom: '10px' }}>
                    Submit
                </Button>
                <p>Once you have submitted your request, it will be sent to the Head of the specified department to approve.</p>

            </Form>
            </Fragment>
        </div>
    );
}

export default CreateRequestForm;
