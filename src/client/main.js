/* Copyright G. Hemingway, 2017 - All rights reserved */
"use strict";

// Necessary modules
import React, {Component}     from 'react';
import { render }               from 'react-dom';
import { Router, Route, IndexRoute, browserHistory }  from 'react-router'
import { Header }               from './components/header';
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
            <Header user={this.props.route.user}/>
            {this.props.children}
        </div>;
    }
}

class User {
    constructor() {
        // See if user is in localStorage
        const data = localStorage.getItem('user');
        this.data = data ? JSON.parse(data) : {
            username: "",
            primary_email: ""
        };
    }

    logIn(data) {
        // Store locally
        this.data = data;
        // Store into localStorage
        localStorage.setItem('user', JSON.stringify(data));
        // Go to user profile
        browserHistory.push(`/profile/${data.username}`);
    }

    logOut() {
        // Remove user info
        this.data = {
            username: "",
            primary_email: ""
        };
        // Wipe localStorage
        localStorage.removeItem('user');
        // Go to login page
        browserHistory.push('/login');
    }

    getUser() {
        return this.data;
    }
}
let user = new User();

render(
    <Router history={browserHistory}>
        <Route path="/" component={MyApp} user={user}>
            <IndexRoute component={Landing}/>
            <Route path="/buyer" component={Customer} user={user}/>
            <Route path="/seller" component={Business} user={user}/>
            <Route path="/product/:id" component={Product}/>
        </Route>
    </Router>,
    document.getElementById('mainDiv')
);
