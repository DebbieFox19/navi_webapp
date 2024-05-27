
import React, {Fragment} from 'react';
import CreateCapacityRequest from '../components/CreateCapacityRecord';
import TeamPickerForm from '../components/TeamPickerForm';



function Record() {
    return (
        <Fragment>
            <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Capacity</h1>
            <CreateCapacityRequest />
            <TeamPickerForm />
        </Fragment>
    );
}

export default Record;

