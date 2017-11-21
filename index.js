const config = require('./config.json');
const Promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const db = require('./db')(Sequelize, config);
const Op = Sequelize.Op;

module.exports = db;

async function main()
{
   // await Promise.all([db.fleets.sync({force: true}), db.motions.sync({force: true}), db.vehicles.sync({force: true})]);
    const app = express();
    app.use('/api', require('./api/api'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static('public'));

    app.listen(3000, () =>
    {
        console.log('Example app listening on port 3000!');
    });
}

main();

