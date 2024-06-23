import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { parse, format } from 'date-fns';

const UpdateRequest = ({ request }) => {
    const [id, setId] = useState(request.id); 
    const [name, setName] = useState(request.name);
    const [product_team_name, setProduct_team_name] = useState(request.product_team_name);
    const [timesheet_code, setTimesheet_code] = useState(request.timesheet_code);
    const [email, setEmail] = useState(request.email);
    const [support_team_required, setSupport_team_required] = useState(request.support_team_required);
    const [skills_required, setSkills_required] = useState(request.skills_required);
    const [support_type, setSupport_type] = useState(request.support_type);
    const [priority, setPriority] = useState(request.priority);
    const [start_date, setStart_date] = useState(format(new Date(request.start_date), 'yyyy-MM-dd'));
    const [hrs_day, setHrs_day] = useState(request.hrs_day);
    const [description, setDescription] = useState(request.description);
    const [status, setStatus] = useState(request.status);

    

    const updateData = async (e) => {
        e.preventDefault();
        try {
            const body = { name, 
                            product_team_name, 
                            timesheet_code, 
                            email, 
                            support_team_required, 
                            skills_required, 
                            support_type, 
                            priority, 
                            start_date: format(parse(start_date, 'yyyy-MM-dd', new Date()), 'dd-MM-yyyy'),  
                            hrs_day, 
                            description, 
                            status };
            const response = await fetch(`http://localhost:5000/api/requests/${request.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            if (response.status === 200) {
                alert("Request updated successfully");
                window.location = "/RequestManagement";
            } else {
                alert("There may not be sufficient capacity to approve the request for this day. Please check available capacity for selected team");;
            }

            
        } catch (err) {
            console.error(err.message);
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        {request.status === 'Approved' ? null : (
            <Button variant="primary" onClick={handleShow}>
                Update
            </Button>
        )}
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="name">
                            <Form.Label><strong>Name</strong></Form.Label>
                            <Form.Control type="text" 
                                          required style={{ marginBottom: '10px' }}
                                          value = {name}
                                          onChange = {(e) => setName(e.target.value)}

                            />
                    </Form.Group>

                    <Form.Group controlId="product_team_name">
                            <Form.Label><strong>Product Team Name</strong></Form.Label>
                            <Form.Control   type="text" 
                                            placeholder="Enter your Product Team name" 
                                            style={{ marginBottom: '10px' }} 
                                            value = {product_team_name}
                                            onChange = {(e) => setProduct_team_name(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="timesheet_code">
                            <Form.Label><strong>Timesheet Code</strong></Form.Label>
                            <Form.Control   type="text" 
                                            placeholder="Timesheet code" 
                                            required style={{ marginBottom: '10px' }} 
                                            value = {timesheet_code}
                                            onChange = {(e) => setTimesheet_code(e.target.value)}
                            />
                        </Form.Group>

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
                        
                        <Form.Group controlId="support_type">
                            <Form.Label><strong>Support Type</strong></Form.Label>
                            <Form.Control   as="select" 
                                            style={{ marginBottom: '10px' }}
                                            value={support_type}
                                            onChange={(e) => setSupport_type(e.target.value)}
                            >
                               
                                <option value="AdHoc">AdHoc</option>
                                <option value="Planned">Planned</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="priority">
                            <Form.Label><strong>Priority</strong></Form.Label>
                            <Form.Control   as="select" 
                                            style={{ marginBottom: '10px' }}
                                            value={priority}
                                            onChange={(e) => setPriority(e.target.value)}
                            >
                                
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Critical">Critical</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="start_date">
                            <Form.Label><strong>Start Date</strong></Form.Label>
                            <Form.Control   type="date"
                                            required 
                                            style={{ marginBottom: '10px' }} 
                                            value = {start_date}
                                            onChange = {(e) => setStart_date(e.target.value)}
                            />
                            
                        </Form.Group>

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
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => updateData(e)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateRequest;


