import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Rent, Buy, Sell, Contact} from './components';

const Routes = () => {
    
        return (
            <Switch>
                 />
                <Route path="/Rent" component={Rent} />
                <Route path="/Buy" component={Buy} />
                <Route path="/Sell" component={Sell} />
                <Route path="/Contact" component={Contact} />


                <Route path="/" component={Rent} />
            </Switch>
        )

};

export default Routes;