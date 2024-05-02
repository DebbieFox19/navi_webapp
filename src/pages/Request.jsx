
import React from 'react';
import RequestForm from '../components/requestForm';

function Request() {
    return (
        <div>
            <br />
            <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Raise Request</h1>

            <div className="request-body" style={{ margin: '40px' }}>
                <br />
                <RequestForm />
            </div>            
        </div>
    );
}

export default Request;