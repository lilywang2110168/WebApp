/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component } from 'react';
import Chart from './Chart.js';
import Map from './map.js';
import {Header2} from './header2';


/*************************************************************************/

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:"",
            demographics:false,
            features:true
        };

        this.features = this.features.bind(this);
        this.demographics= this.demographics.bind(this);
    }

    features(){
        this.setState({features:true,  demographics:false});}

    demographics(){
        this.setState({features:false,  demographics:true});
        console.log("I am in the onClick function");
    }


    componentDidMount(){
        $.ajax({
            url: `http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/product/${this.props.params.id}?CacheUserName=SuperUser&CachePassword=SYS`,
            dataType:'json',
            method: "get",
            success: data => {
                console.log(data);
                this.setState({data: data});}
        });
    }

    render() {

        let featuresAnalysis;
        let demographics;


        if(this.state.data){


            if(this.state.features){
                this.state.data.features.sort(function(a, b) {
                    return parseFloat(b.popularityScore) - parseFloat(a.popularityScore);
                });

                let  featuresTable = this.state.data.features.map((feature, index)=> {
                    return <tr key={index}>
                        <th>{feature.featureName}</th>
                        <th>{feature.sentimentScore}</th>
                        <th>{feature.popularityScore}</th>
                            <th>{feature.summary}</th>
                    </tr>;
            });

                featuresTable=<table className="table table-striped"><thead>
                    <tr>
                    <th>Feature</th>
                    <th>Sentiment</th>
                    <th>Popularity</th>
                    <th>Summary</th>
                </tr>
                </thead>
                <tbody>
                {featuresTable}</tbody></table>;

                let comparisonTable;

                for (let i = 0, len =this.state.data.categories.length; i < len; i++) {
                    let category=this.state.data.categories[i];
                    if(category.features.length>0){

                       category.features.sort(function(a, b) {
                            return parseFloat(b.popularityScore) - parseFloat(a.popularityScore);
                        });

                        comparisonTable=category.features.map((feature, index)=> {
                            let comparision;
                            let percentage=feature.numProductsLowerSentiment/(feature.numProductsHigherSentiment+feature.numProductsLowerSentiment);
                            percentage=percentage*100;
                            comparision=<th>Defeated {percentage}% </th>;


                            return <tr key={index}>
                                <th>{feature.featureName}</th>
                                <th>{feature.sentimentScore}</th>
                                <th>{feature.popularityScore}</th>
                                <th>{comparision}</th>
                            </tr>;
                        });

                        comparisonTable=<table className="table table-striped"><thead>
                        <tr>
                            <th>Feature</th>
                            <th>Sentiment</th>
                            <th>Popularity</th>
                            <th>Comparision</th>
                        </tr>
                        </thead>
                            <tbody>
                            { comparisonTable}</tbody></table>;

                    }
                }


           featuresAnalysis=<div className="row">
                <div className="col-xs-5">
                    <h2>{this.state.data.title}</h2>
                    <img src={this.state.data.imageUrl}/>
                    <h3>Comparisons</h3>
                    {comparisonTable}
                </div>
                <div className="col-xs-7">
                    <h3>Features</h3>
                    {featuresTable}</div></div>;}
           else{
                featuresAnalysis=null
            }


           if(this.state.demographics){
                console.log("I am here");

               let geographic= <div>
                   <h3>Demographics</h3>
                   <Map markers={[]}/></div>;
               let gender=<div>
                  <div className="panel panel-default">
                <div className="panel-heading">gender comparisons</div>
               <div className="panel-body">female reviewers reviewed screen resolution higher</div>
                  </div>
                   <Chart/></div>;




               demographics=<div className="row">
                   <div className="col-xs-3">
                       <br/><br/>
                       <div className="panel panel-default">
                           <div className="panel-heading">Most pupular Feature</div>
                           <div className="panel-body">screen resolution</div>
                       </div>

                   </div>
                   <div className="col-md-7">
                       {geographic}</div>
                   <div className="row">
                       <div className="col-xs-3"/>
                       <div className="col-md-7">{gender}</div>
                   </div></div>;
            }

           else{
               demographics=null;
           }
        }


        return <div><Header2/>
            <ul className="nav nav-tabs">
                <li className="active"><a href="#"  onClick={this.features}>Features</a></li>
                <li><a href="#" onClick={this.demographics}>Demographics</a></li>
            </ul>
                {featuresAnalysis}
                {demographics}
        </div>
    }
}
