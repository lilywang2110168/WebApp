/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';
import React, { Component } from 'react';
import Chart from './Chart_lily.js';
import Map from './map_lily.js';
import {Header} from './header_ruchi.js';


/*************************************************************************/

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:"",
            demographics:false,
            features:true,
            category:'',
            markers:[],
            mapLikedFeature:"hover over a cluster on the map",
            mapPopularFeature:"                               ",
            likedFemale:true,
            popularFemale:false,
        };

        this.features = this.features.bind(this);
        this.demographics= this.demographics.bind(this);
        this.getDemographics= this.getDemographics.bind(this);
        this.myCallback= this.myCallback.bind(this);
        this.onClickPopular= this.onClickPopular.bind(this);
        this.onClickLiked= this.onClickLiked.bind(this);
    }

    features(){
        this.setState({features:true,  demographics:false});}

    demographics(){
        this.setState({features:false,  demographics:true});
    }

    onClickPopular(ev){
        let state=this.state.popularFemale;
        this.setState({popularFemale: !state});
    }

    onClickLiked(ev){
        let state=this.state.likedFemale;
        this.setState({likedFemale: !state});
    }

    myCallback(data) {
        this.setState({mapLikedFeature: data.mostLikedFeature});
        this.setState({mapPopularFeature: data.mostPopularFeature});

    }



    componentWillMount(){
        $.ajax({
            url: `http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/product/${this.props.params.id}?CacheUserName=SuperUser&CachePassword=SYS`,
            dataType:'json',
            method: "get",
            success: data => {
                this.setState({data: data});
                this.getDemographics();
            }
        });
    }

//setting it to be 100 at first
    getDemographics(){

                $.ajax({
                    url: "http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/demographics/laptops?CacheUserName=SuperUser&CachePassword=SYS",
                    dataType:'json',
                    method: "get",
                    success: data => {
                       let markers=data.reviewers.slice(0, 2000).map((reviewer,index)=>{
                            return {index:index, location:reviewer.location, reviewerID:reviewer.id}
                        });
                        delete data.reviewers;

                        this.setState({markers:markers});
                        this.setState({demographicsData:data});
                    }});
    }

    render() {

        let featuresAnalysis;
        let demographics;


        if(this.state.data){
            //the api call has returned some information

            if(this.state.features){
                this.state.data.features.sort(function(a, b) {
                    return parseFloat(b.popularityScore) - parseFloat(a.popularityScore);
                });

                let  featuresTable = this.state.data.features.map((feature, index)=> {
                    if(feature.featureName==="machine" ||feature.featureName==="window" ){
                    }else{
                    return <tr key={index}>
                        <th  className="tableText">{feature.featureName}</th>
                        <th  className="tableText">{Math.round(feature.sentimentScore*10)/10}</th>
                        <th  className="tableText">{Math.round(feature.popularityScore*10)/10}</th>
                            <th  className="tableText">{feature.summary}</th>
                    </tr>;
            }});

                featuresTable=<table className="table table-striped featureTable"><thead>
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
                let categoryName;

                for (let i = 0, len =this.state.data.categories.length; i < len; i++) {
                    let category=this.state.data.categories[i];
                    if(category.features.length>0){
                        categoryName=category.categoryName;
                       category.features.sort(function(a, b) {
                            return parseFloat(b.popularityScore) - parseFloat(a.popularityScore);
                        });

                        comparisonTable=category.features.map((feature, index)=> {
                            if(feature.featureName==="machine"){
                            }else{
                            let comparision;
                            let percentage=feature.numProductsLowerSentiment/(feature.numProductsHigherSentiment+feature.numProductsLowerSentiment);
                            percentage=Math.round(percentage*1000)/10;
                            comparision=<th className="tableText">better than {percentage}% </th>;


                            return <tr key={index}>
                                <th  className="tableText">{feature.featureName}</th>
                                <th  className="tableText">{Math.round(feature.popularityScore*10)/10}</th>
                                {comparision}
                            </tr>;
                        }});

                        comparisonTable=<table className="table table-striped comparisonTable"><thead>
                        <tr>
                            <th>Feature</th>
                            <th>Popularity</th>
                            <th>Comparision</th>
                        </tr>
                        </thead>
                            <tbody>
                            { comparisonTable}</tbody></table>;

                    }
                }


           featuresAnalysis=<div className="row">
                <div className="col-xs-4">
                    <h3 className="productTitle comparisionTable">{this.state.data.title}</h3>
                    <img className="productImage" src={this.state.data.imageUrl}/>
                    <h4 className="tableTitle comparisionTable">Compared to other {categoryName}</h4>
                    <br/>
                    {comparisonTable}
                </div>
                <div className="col-xs-8"><br/>
                    <h4 className="tableTitle">Feature analysis based on {this.state.data.numReviews} reviews</h4>
                    <br/>
                    {featuresTable}</div></div>;}
           else{
                featuresAnalysis=null
            }

           if(this.state.demographics){
            let geographic, likedFeature, popularFeature,likedButton, popularButton;
               if(this.state.demographicsData){

              geographic= <div>
                   <h3>Map of Reviewer Locations</h3>
                   <Map markers={this.state.markers} callback={this.myCallback}/></div>;


                   if(this.state.likedFemale){
                        likedFeature=this.state.demographicsData.genderPrefs.female.mostLiked.map((item, index)=>(
                            <p key={index}>{item.featureName.toLowerCase()}</p>
               ));
                        likedButton=  <button className="btn btn-default searchButton" onClick={this.onClickLiked}>Female</button>;
                   }else{
                       likedFeature=this.state.demographicsData.genderPrefs.male.mostLiked.map((item, index)=>(
                           <p key={index}>{item.featureName.toLowerCase()}</p>
                       ));
                       likedButton=  <button className="btn btn-default searchButton" onClick={this.onClickLiked}>Male</button>;
                   }

                   if(this.state.popularFemale){
                       popularFeature=this.state.demographicsData.genderPrefs.female.mostPopular.map((item, index)=>(
                           <p key={index}>{item.featureName.toLowerCase()}</p>
                       ));

                       popularButton = <button className="btn btn-default searchButton" onClick={this.onClickPopular}>Female</button>;

                   }else{
                       popularFeature=this.state.demographicsData.genderPrefs.male.mostPopular.map((item, index)=>(
                           <p key={index}>{item.featureName.toLowerCase()}</p>
                       ));

                       popularButton = <button className="btn btn-default searchButton" onClick={this.onClickPopular}>Male</button>;

                   }







               demographics=<div>
                   <div className="row">
                   <div className="col-xs-3">
                       <br/><br/>
                       <div className="panel panel-default mapPanel">
                           <div className="panel-heading ">Most Liked Feature</div>
                           <div className="panel-body"> {this.state.mapLikedFeature}</div>
                       </div>
                       <br/><br/>
                       <div className="panel panel-default mapPanel2">
                           <div className="panel-heading">Most Popular Feature</div>
                           <div className="panel-body"> {this.state.mapPopularFeature}</div>
                       </div>
                   </div>
                   <div className="col-xs-8">
                       {geographic}</div></div>


                   <div className="row">
                       <div className="col-xs-1"/>
                       <div className="col-xs-4"><Chart male={this.state.demographicsData.numMaleReviewers}
                       female={this.state.demographicsData.numFemaleReviewers}/> <br/></div>
                       <div className="col-xs-3 panelButton">

                           <br/>
                           <div className="panel panel-default">
                               <div className="panel-heading">Most Popular Feature</div>
                               <div className="panel-body">{popularFeature}</div>
                           </div>
                           {popularButton}
                           </div>
                       <div className="col-xs-3 panelButton">
                           <br/>
                           <div className="panel panel-default">
                               <div className="panel-heading">Most Liked Feature</div>
                               <div className="panel-body">{likedFeature}</div>

                           </div>
                           {likedButton}
                       </div>
                       </div></div>
            }}

           else{
               demographics=null;
           }
        }


        return <div><Header/>
            <ul className="nav nav-tabs">
                <li className="active"><a href="#"  onClick={this.features}>Features</a></li>
                <li><a data-toggle="tab" href="#" onClick={this.demographics}>Demographics</a></li>
            </ul>
                {featuresAnalysis}
                {demographics}
                <br/>
        </div>
    }
}
