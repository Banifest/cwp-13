const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('../index');

const app = express.Router();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/readall', (req, res) =>
{
    res.contentType('application/json');
    db.fleets.findAll()
        .then(query => res.json(query));
});

app.get('/read', (req, res) =>
{
    res.contentType('application/json');
    db.fleets.findById(req.headers.id)
        .then(query => res.json(query));
});

app.post('/create', (req, res)=>
{
    //console.log(req.body.name);
    res.contentType('application/json');
    db.fleets.create
    (
        {
            name: req.body.name
        }
    ).then((fleet)=> res.json(fleet))
});

module.exports = app;