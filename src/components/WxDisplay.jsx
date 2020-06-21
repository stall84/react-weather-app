import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// We've got a simple stateless functional component rendering out the passed-in-thru-props weather conditions

export default function WxDisplay (props) {
     
    return (
        <div>
            <h2>Local Conditions:</h2>
            <h3>Current Temp: {props.temp}F</h3>
            <h3>Low Temp: {props.temp_min}F</h3>
            <h3>Current Humidity: {props.humidity}%</h3>
        </div>
        )
}
