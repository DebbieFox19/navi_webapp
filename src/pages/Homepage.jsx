import React from 'react';
import ViewSummary from '../components/ViewSummaryData';
import DatePickerForm from '../components/DatePickerForm';


export default function Homepage() {
    return (
        <>
            <div className="container">
                <ViewSummary />
                <DatePickerForm />

            </div>
        </>
    );
}
