'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

let network = require('./fabric/network.js');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.get('/queryAllRecords', (req, res) => {
    network.queryAllRecords()
        .then((response) => {
            let donorsRecord = JSON.parse(response);
            res.send(donorsRecord);
        });
});



app.post('/createRecord', (req, res) => {
    console.log(req.body);
    network.queryAllRecords()
        .then((response) => {
            console.log(response);
            let donorsRecord = JSON.parse(response);
            let numRecords = donorsRecord.length;
            let newKey = 'RECORD' + numRecords;
            network.createRecord(newKey, req.body.NID, req.body.BType, req.body.PFile, req.body.hospital)
                .then((response) => {
                    res.send(response);
                });
        });
});


app.listen(process.env.PORT || 8081);