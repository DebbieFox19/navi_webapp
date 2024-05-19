
import React, {Fragment} from 'react';
import ViewCapacity from '../components/ViewCapacity';
import { Button, Form } from "react-bootstrap";




function Record() {
    return (
        <Fragment>
            <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Capacity</h1>
            <div style={{ backgroundColor: '#BED3AB', padding: '30px', borderRadius: '30px', marginLeft: '500px', marginRight: '500px', marginTop: '100px' }}>
            <Form>
                <Form.Group>
                    <Form.Label>Team</Form.Label>
                    <Form.Control type="text" placeholder="Enter Team" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Week</Form.Label>
                    <Form.Control type="text" placeholder="Enter Week" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter Year" />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            </div>
            <br/>
            <ViewCapacity />  
        </Fragment>
    );
}

export default Record;

