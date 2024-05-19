
import React, {Fragment} from 'react';
import ViewCapacity from '../components/ViewCapacity';
import { Button, Form } from "react-bootstrap";
import CreateCapacityRequest from '../components/CreateCapacityRecord';




function Record() {
    return (
        <Fragment>
            <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Capacity</h1>
            <CreateCapacityRequest />
           
           
            <ViewCapacity />  
        </Fragment>
    );
}

export default Record;

