/* Copyright G. Hemingway, 2017 - All rights reserved */
"use strict";

// Necessary modules
import React, {Component}     from 'react';
import { render }               from 'react-dom';
import { Router, Route, IndexRoute, browserHistory }  from 'react-router'
import { Landing }              from './components/landing';
import { Customer }                from './components/customer';
import { Business }               from './components/business';
import { Product}              from './components/product';



// Bring bootstrap into the picture
require('./app.css');

/*************************************************************************/

class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}


render(
    <Router history={browserHistory}>
        <Route path="/" component={MyApp}>
            <IndexRoute component={Landing}/>
            <Route path="/buyer" component={Customer}/>
            <Route path="/seller" component={Business} />
            <Route path="/product/:id" component={Product}/>
            <Route path="/header"/>
        </Route>
    </Router>,
    document.getElementById('mainDiv')
);
