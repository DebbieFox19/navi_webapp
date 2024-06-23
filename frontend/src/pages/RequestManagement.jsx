
import React, {Fragment} from 'react';


//components
import ViewRequests from '../components/ViewRequests';

function Request() {
    return (
        <Fragment>
            <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Request Management</h1>
            <ViewRequests />  
        </Fragment>
    );
}

export default Request;

