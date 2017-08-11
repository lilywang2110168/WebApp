/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Header} from './header_ruchi';

/*************************************************************************/

export const FeatureExtraction = () => (

    <div>
        <Header/>


        <div className="content-section-a">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <hr className="section-heading-spacer"></hr>
                        <div className="clearfix"></div>
                        <br></br>
                        <br></br>
                        <h1 className="section-heading">
                            FEATURE EXTRACTION
                        </h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">
                                Goal: Extract valid category features
                            </li>
                            <li className="list-group-item list-group-item-info">
                                Input: Set of reviews for an entire category
                            </li>
                            <li className="list-group-item list-group-item-warning">
                                Output: List of 30 most popular features
                            </li>
                            <li className="list-group-item">
                                <br></br>
                                <br></br>
                                Part of Speech Tagging:
                                <br></br>
                                <br></br>
                                    <img className="img-responsive" src='/images/posTagging2.png' width="90%"/>
                                <br></br>
                                <br></br>
                                <br></br>
                            </li>
                        </ul>

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="col-lg-6">
                        <img className="center-block" src="/images/features.png" height="60%" alt></img>
                    </div>

                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="content-section-b">
            <div className="container-fluid">

                <div className="col-lg-6">
                    <br></br>
                    <br></br>
                    <br></br>
                    <img className="center-block" src="/images/featureSentiment.png" alt></img>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <hr className="section-heading-spacer"></hr>
                        <div className="clearfix"></div>
                        <h1 className="section-heading">
                            SENTIMENT ANALYSIS
                        </h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">
                                Goal: Numerical representation of feature likeability
                            </li>
                            <li className="list-group-item list-group-item-info">
                                Input: Set of reviews for an product
                            </li>
                            <li className="list-group-item list-group-item-warning">
                                Output: Score between 1-5 of how much people liked the feature
                            </li>
                            <li className="list-group-item">
                                Dependency Parsing:
                                <ul className="well">
                                    <img className="img-responsive" src='/images/dependencyParsing.png' width="90%"/>
                                </ul>

                            </li>
                        </ul>


                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="content-section-a">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <hr className="section-heading-spacer"></hr>
                        <div className="clearfix"></div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 className="section-heading">
                            FEATURE SUMMARIES
                        </h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">
                                Goal: Meaningful feature summaries
                            </li>
                            <li className="list-group-item list-group-item-info">
                                Input: Set of reviews for a given product
                            </li>
                            <li className="list-group-item list-group-item-warning">
                                Output: Representative summaries for each product feature
                            </li>
                            <li className="list-group-item">
                                Sentence Similarity Algorithm:
                                <ul className="well">
                                    <div className="well-1">
                                        Sentence1: I'm not happy with battery life <br/>
                                        Sentence2: The battery life is not good  <br/>
                                        Sentence3: The battery life is excellent<br/>
                                        SimilarityScore(Sentence1 , Sentence2 ) = 1.0 <br/>
                                        SimilarityScore(Sentence1 , Sentence3 ) = 0.5385
                                    </div>
                                </ul>

                            </li>
                        </ul>

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="col-lg-6">
                        <img className="center-block" src="/images/fs2.png" alt></img>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <div className="content-section-b">
            <div className="container-fluid">

                <div className="col-lg-6">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img className="img-responsive" src="/images/hand.png" width ="100%" height="120%"alt></img>
                </div>




                <div className="row">
                    <div className="col-lg-6">
                        <hr className="section-heading-spacer"></hr>
                        <div className="clearfix"></div>
                        <h1 className="section-heading">
                            TECHNOLOGY
                        </h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">
                                Goal: Not only use but showcase a number of Intersystems Technologies
                            </li>
                            <li className="list-group-item">
                                <ul className="well">
                                    <li> InterSystems IRIS </li>
                                    <div>
                                        - Interoperability <br/>
                                        - Reliability <br/>
                                        - Intuitiveness <br/>
                                        - Scalability <br/>
                                    </div>
                                    <li> Multimodel (SQL, Object Model, DocDB) </li>
                                    <li> REST API </li>
                                    <li> InterSystems IRIS Natural Language Processing</li>
                                    <li> InterSystems Cloud Manager</li>
                                    <li> External technologies</li>
                                    <div>
                                        - Natural Language Toolkit <br/>
                                        - spaCy<br/>
                                        - Ginger API<br/>
                                    </div>

                                </ul>

                            </li>
                        </ul>


                    </div>
                </div>
                <div className="box3"></div>
            </div>
        </div>

    </div>);