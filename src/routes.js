import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Components here
import Home from './Components/Home/Home';
import Catalog from './Components/Catalog/Catalog';


export default (
    <Switch>
        <Route component={ Home } from exact path='/'/>
        <Route component={ Catalog } from exact path='/catalog'/>
    </Switch>
)