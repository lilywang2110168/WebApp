/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { Link, browserHistory } from 'react-router';
import {Header} from './header';
/*************************************************************************/

export const Landing = () => (

           <div> <Header/>
        <div className="landingImage">

            <img src="/images/reviews.png"></img>
            <div className="imageText">

            <h2>Read all the reviews in 60 seconds</h2>
            <div className="row">
            <div className="col-xs-5"></div>
            <div className="col-md-6">
                <h2>Start now</h2>
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

            </div></div></div>
);
