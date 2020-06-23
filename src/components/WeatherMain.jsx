import React, { Component } from 'react';
import axios from 'axios';
import WxDisplay from './WxDisplay';
import '../styles/WeatherMain.css';



class WeatherMain extends Component {
  

    // Set up base-url/api-call
   
    // Create a method to load in the local weather when the component is loaded
    componentDidMount() {
        console.log(this.props.inputCity)
        
    }

    render() {
        // Method below was used to map over array when one was available in axios payload. When we went back to 
        // payload being object of objects, map method would no longer work & explicitly passed down which object we wanted through
        // props {...this.state.weather.main}
        /*
        const wxJsx = this.state.weather.map((wx,index) => {
            return <WxDisplay key={index} {...wx} />
        })
        */
        return (
            <div className="mainWindow">

                <h1>YOUR WEATHER APP</h1>
                <div>
                    <WxDisplay {...this.props.weather} />
                </div>

            </div>
        )
    }


}

export default WeatherMain;