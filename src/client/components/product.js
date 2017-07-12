/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component } from 'react';
/*************************************************************************/

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:""
        };

    }


    componentDidMount(){
        $.ajax({
            url: `/v1/analytics/${this.props.params.id}`,
            method: "get",
            success: data => {
                console.log(data);
                this.setState({data: data});
            },
        });
    }



    render() {
        let analytics;
        if(this.state.data){

            let  products = this.state.data.features.map((product, index)=> {
                return <tr key={index}>
                    <th>{product}</th>
                    <th>4</th>
                </tr>;
            });


            analytics=<div className="row">
                <div className="col-xs-4"></div>
                <div className="col-md-6">
                 <h2>{this.state.data.name}</h2>
                    <img src={this.state.data.image}></img>
                    <h3>Description</h3>
                    <p>{this.state.data.description}</p>
                    <h3>Features</h3>
                    <table id="gameTable" className="col-xs-12 table">
                        <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                    <tbody>
                    {products}</tbody> </table>
                    <h3>Demographics</h3>
                    <p>{this.state.data.graph}</p>
                </div></div>;
        }
        return <div>
            {analytics}
        </div>
    }
}
