
import React from 'react';
import CreateRequestForm from '../components/CreateRequestForm';

function Request() {
    return (
        <div>
            <br />
            <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Raise Request</h1>

            <div className="request-body" style={{ margin: '40px' }}>
                <br />
                <fragment>
                <CreateRequestForm />
                </fragment>
            </div>            
        </div>
    );
}

export default Request;