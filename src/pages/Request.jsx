
import React from 'react';
import RequestForm from '../components/requestForm';

function Request() {
    return (
        <div>
            <br />
            <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Raise Request</h1>

            <div className="request-body" style={{ margin: '40px' }}>
                <br />
                <p>Please capture as much information as possible in the form to help the allocated team deal with your request.</p>
                {/* Add your form elements here */}
                <RequestForm />
            </div>            
        </div>
    );
}

export default Request;