import React, { Component } from 'react';
import WeatherMain from './WeatherMain';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import '../styles/App.css';

class App extends Component {

    constructor(props) {

        super(props) 


        this.state = {

          inputCity: null

        }
    }

// create local state to hold text input



// create a REF to store input from city search form
cityInput = React.createRef()

// push new city input onto state

handleChange = (event) => {

  this.setState({ inputCity: event.target.value })

}



 goToCity = (event) => {
   // Stop the form from resubmitting (prevent default)
   event.preventDefault()
   // Get the text of the input city
   
   // push the city input text onto state

   // Change the page to the current-weather display page while also handing down the 
   // city name text data via props
   //this.props.history.push('/curr-cond');
}

queryCity = () => {
  
}

  render() {
    
      return (  
        <React.Fragment>
          

           
              <div className="container searchForm">
                <h2>Enter a city, state, country<br/>for local conditions</h2>
                <form className="citySearchForm" onSubmit={this.goToCity}>
                  <label htmlFor="citySearch">City Search</label>
                  <input value={this.state.inputCity} onChange={this.handleChange} type="text" id="citySearch" name="citySearch" placeholder="e.g. Atlanta,GA,USA"/>
                  <input type="submit" />
                </form>

              </div>
           

            
                <div class="mainWeatherDiv">
                <WeatherMain {...this.state} />
                </div>
           
        </React.Fragment>
    )
  }

}

export default App;
