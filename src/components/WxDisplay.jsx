import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// We've got a simple stateless functional component rendering out the passed-in-thru-props weather conditions

export default function WxDisplay (props) {
    // Was getting 'Type Error: property 'temp' of Undefined...' when trying to access nested object. Until doing some research. 
    // Apparently nested objects won't have time to download before they are rendered by the react component
    // The work-around to this is to add some logic to check if the nested object key yet exists, returning null 
    // if it does not, thereby not breaking the component, allowing it to wait for the api to download the nested object

     if (!props.main) {
         return null;
     }

    return (
        <div>
            <h2>Local Conditions:</h2>
            <h3>Current Temp: {props.main.temp}F</h3>
            <h3>Low Temp: {props.main.temp_min}F</h3>
            <h3>Current Humidity: {props.main.humidity}%</h3>
            <h3>City Name: {props.name}</h3>
        </div>
        )
}
