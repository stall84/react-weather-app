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

// create a REF to store input from city search form
cityInput = React.createRef()

 goToCity = (event) => {
   // Stop the form from resubmitting (prevent default)
   event.preventDefault()
   // Get the text of the input city
   console.log(this.cityInput.current.value)
   // Change the page to the current-weather display page while also handing down the 
   // city name text data via props
   
 }

  render() {
    
      return (  
        <React.Fragment>
          <Switch>

            <Route exact path="/">
              <div className="container searchForm">
                <h2>Enter a city, state, country<br/>for local conditions</h2>
                <form className="citySearchForm" onSubmit={this.goToCity}>
                  <label htmlFor="citySearch">City Search</label>
                  <input ref={this.cityInput} type="text" id="citySearch" name="citySearch" placeholder="e.g. Atlanta,GA,USA"/>
                  <input type="submit" />
                </form>

              </div>
            </Route>

            <Route path="/curr-cond">
                <div class="mainWeatherDiv">
                <WeatherMain />
                </div>
            </Route>

          </Switch>
        </React.Fragment>
    )
  }

}

export default App;
