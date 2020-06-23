import React from 'react';
import { BrowserRouter, 
        Route, 
        Switch} from 'react-router-dom';
import App from './App.jsx';
import WeatherMain from './WeatherMain';
import NotFound from './NotFound';



const Router = () => {

    return (
    <BrowserRouter>

        <Switch>

            <Route exact path="/" component={App} />
            <Route exact path="/curr-cond" component={WeatherMain} />
            <Route component={NotFound} />

            

        </Switch>
    
    </BrowserRouter>
      )
    }

export default Router;