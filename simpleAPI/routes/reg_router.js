var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var regrouter = express.Router()
var regModel = require('../models/register_model')


// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({ extended: true }));


// http://localhost:3000/reg/register
regrouter.post('/register',(req,res) =>{

        console.log(req.body);
    var emails = req.body.email;
    var pass = req.body.password;

    var record = new regModel({

            email : emails,
            password : pass
    })

    record.save().then( c =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json("Registered successfully");
    }).catch(err =>{
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.json("Error accoured");
        console.log(err);
    })

})

// http://localhost:3000/reg/name?email=hari@gmail.com
regrouter.get('/name',(req,res) => {
    var name = req.query.email;

    regModel.find({email : name}).then(c => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(c);

    }).catch(err => {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.json("Error accoured");
        console.log(err);
    })
})

module.exports = regrouter;


