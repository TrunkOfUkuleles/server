'use strict';

const express = require('express');

//brings in env library
require('dotenv').config();

//library to handle visitors (bodyguard)
const cors = require('cors');
//innit
const app = express();

//others access server
app.use(cors())

const PORT = process.env.PORT;

app.get('/', function (req, res){
    res.send('hello world')
})                                                     

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))