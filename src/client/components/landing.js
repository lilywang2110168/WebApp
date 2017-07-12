/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { Link, browserHistory } from 'react-router';
/*************************************************************************/

export const Landing = () => (

    <div>
    <div className="container">
        <div className="row">
            <div className="col-xs-5"></div>
            <div className="col-md-6">
                <h2>Welcome</h2>
                <br></br> <br></br>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-4"></div>
            <div className="col-md-6">
                <Link to="/seller">   <button className="btn btn-default landingButton">Seller</button> </Link>
            </div>
            </div>

        <div className="row">
            <div className="col-xs-4"></div>
            <div className="col-md-6">
                <Link to="/buyer">  <button className="btn btn-default landingButton">Buyer</button></Link>
            </div>
        </div>
        </div>
    </div>
);
