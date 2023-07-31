//Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const { check, validationResult } = require('express-validator');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//GET method route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
}
