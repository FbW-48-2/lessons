import React from 'react'
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
    if(!props.auth){
        //console.log(' you are not autorized to see this page!');
        return <Redirect to='/login' />
    }
    return (
        <div>
            <h3> welcome back!  , Dashboard page</h3>
        </div>
    )
}

export default Dashboard
