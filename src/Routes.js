import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Home, Rent, Buy, Sell, Contact} from '../src/components'

const Routes = () => {
    
        return (
            <Switch>
                 />
                <Route path= "/Home" component ={Home}/>
                <Route path="/Rent" component={Rent} />
                <Route path="/Buy" component={Buy} />
                <Route path="/Sell" component={Sell} />
                <Route path="/Contact" component={Contact} />


                <Route path="/" component={Home} />
            </Switch>
        )

};

export default Routes;