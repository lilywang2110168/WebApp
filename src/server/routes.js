/* Copyright G. Hemingway @2017 - All rights reserved */
"use strict";

let _       = require('underscore')


module.exports = (app) => {
    //sends back the products that belong to this brand
    app.get('/v1/brand/:brandname', function(req, res) {
        let data=[{
            id:12345,
            name: "iPad",
            image: "https://cdn.pastemagazine.com/www/articles/iPad%20Air.jpg",
            description: "The iPad is a 9.7 inch touch screen tablet PC made by Apple."},
            {
                id:12346,
                image:"https://d3nevzfk7ii3be.cloudfront.net/igi/Fjh4QLohID2A5xd4.standard",
                name: "Macbook Pro",
                description: "MacBook Pro is faster and more powerful than before, yet remarkably thin and light. "},
        ];
        res.status(200).send(data);
    });


    app.get('/v1/product/:productID', function(req, res) {
        let data={
            id:12347,
            name: "Macbook Air",
            description: "The MacBook Air is a line of Macintosh subnotebook computers developed and manufactured by Apple Inc.",
            image:"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKAIR/MACBOOKAIR?wid=500&hei=298&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=lA5lr0"
        };
        res.status(200).send(data);
    });


    //sends back analytics
    app.get('/v1/analytics/:productID', function(req, res) {
        let data={
            id:123,
            name: 'Macbook Pro',
            scores:[1,5,6,7,8],
            features:['screen resolution', "touch pad", 'price',"customer service", 'light weight'],
            comparision:[""],
            graph:"This is a demographics graph",
            description: "MacBook Pro is faster and more powerful than before, yet remarkably thin and light. ",
            image:"https://d3nevzfk7ii3be.cloudfront.net/igi/Fjh4QLohID2A5xd4.standard"
        };
        res.status(200).send(data);
    });


    //sends back features of a category
    app.get('/v1/category/:category', function(req, res) {
        let data=['screen resolution', "touch pad", 'price',"customer service", 'light weight'];
        res.status(200).send(data);
    });


    //sends back products that rank from highest to lowest
    app.get('/v1/feature/:features', function(req, res) {
        let data=[{
            id:"0000031852",
            name: "iPad",
            image: "https://cdn.pastemagazine.com/www/articles/iPad%20Air.jpg",

            description: "The iPad is a 9.7 inch touch screen tablet PC made by Apple."},
            {
                id:"0000031852",
                name: "Macbook Pro",
                image:"https://d3nevzfk7ii3be.cloudfront.net/igi/Fjh4QLohID2A5xd4.standard",
                description: "MacBook Pro is faster and more powerful than before, yet remarkably thin and light."},
        ];
        res.status(200).send(data);
    });
};