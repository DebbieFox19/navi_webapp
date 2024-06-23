import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const UpdateRecord = ({ record }) => {
    const [id, setId] = useState(record.id); 
    const [team_id, setTeam_id] = useState(record.team_id);
    const [team, setTeam] = useState(record.team);
    const [day, setDay] = useState(record.day);
    const [total_capacity, setTotal_capacity] = useState(record.total_capacity);
    const [available_capacity, setAvailable_capacity] = useState(record.available_capacity);
    const [booked_capacity, setBooked_capacity] = useState(record.booked_capacity);


    

    const updateRecordData = async (e) => {
        try {
            const body = { team_id, team, day, total_capacity, available_capacity, booked_capacity };
            const response = await fetch(`http://localhost:5000/api/capacity/${record.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);

            window.location = "/Capacity";
        } catch (err) {
            console.error(err.message);
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Capacity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="Team">
                            <Form.Label><strong>Team</strong></Form.Label>
                            <Form.Control type="text" 
                                          required style={{ marginBottom: '10px' }}
                                          value = {team}
                                          onChange = {(e) => setTeam(e.target.value)}

                            />
                    </Form.Group>

                    <Form.Group controlId="Date">
                            <Form.Label><strong>Date</strong></Form.Label>
                            <Form.Control   type="date"  
                                            style={{ marginBottom: '10px' }} 
                                            value = {day}
                                            onChange = {(e) => setDay(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="Total Capacity">
                            <Form.Label><strong>Total Capacity</strong></Form.Label>
                            <Form.Control type="number"
                                          required style={{ marginBottom: '10px' }}
                                          value = {total_capacity}
                                          onChange = {(e) => setTotal_capacity(e.target.value)}
                            />
                        </Form.Group>   
                        <Form.Group controlId="Available Capacity">
                            <Form.Label><strong>Available Capacity</strong></Form.Label>
                            <Form.Control type="number"
                                          required style={{ marginBottom: '10px' }}
                                          value = {available_capacity}
                                          onChange = {(e) => setAvailable_capacity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="Booked Capacity">
                            <Form.Label><strong>Booked Capacity</strong></Form.Label>
                            <Form.Control type="number"
                                          required style={{ marginBottom: '10px' }}
                                          value = {booked_capacity}
                                          onChange = {(e) => setBooked_capacity(e.target.value)}
                            />
                        </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => updateRecordData(e)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateRecord;


