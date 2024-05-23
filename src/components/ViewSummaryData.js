import React, { Fragment, useEffect, useState } from "react";




//View Summary function

const ViewSummary = () => {

    const [pending_summary, SetPending_Summary] = useState([]);

    const getpending_summary = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/Summary");
            const jsonData = await response.json();
            
            SetPending_Summary(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getpending_summary();
    } , []);


    //get support team summary data
    const [team_summary, SetTeam_Summary] = useState([]);

    const getSupportTeamSummary = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/summary/:support_team_required");
            const jsonData = await response.json();
            
            SetTeam_Summary(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getSupportTeamSummary();
    } , []);




    return (
        <Fragment>
            <div style={{ backgroundColor: '#BED3AB', padding: '40px', borderRadius: '30px', margin: '60px' }}>
                <h1 style={{ textAlign: 'center' }}>Request Summary Data</h1>
                <table class="table table-hover table-responsive-md table align-middle table caption-top">
                <caption><h2>Pending Requests</h2></caption>
            <thead>
                <tr>
                    <th>Count</th>
                    <th>Priority</th>
                    <th>Support Team Required</th>
                </tr>
            </thead>
            <tbody>
                {pending_summary.map((item) => (
                    <tr>
                        <td>{item.pending}</td>
                        <td>{item.priority}</td>
                        <td>{item.support_team_required}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            <br />
            <table class="table table-hover table-responsive-md table align-middle table caption-top">
                <caption><h2>Total Requests Raised</h2></caption>
            <thead>
                <tr>
                    <th>Count</th>
                    <th>Support Team Required</th>
                </tr>
            </thead>
            <tbody>
                {team_summary.map((item) => (
                    <tr>
                        <td>{item.count}</td>
                        <td>{item.support_team_required}</td>
                    </tr>
                ))}
            </tbody>
            </table>

            <br />
</div>
           
        </Fragment>
    )
};

export default ViewSummary;


