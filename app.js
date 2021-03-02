'use strict';

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./server/router");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.listen(8081, (error) => {
    if (error) console.error('Error starting server', error);
    else console.log('Successful Connection');
});

app.use(express.static(path.join(__dirname, "/views")));

app.use("", routes);
