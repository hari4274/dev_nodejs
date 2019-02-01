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
        res.json("Error : " + err.errmsg);
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
        res.json("Error : " + err.errmsg);
        console.log(err);
    })
})

// http://localhost:3000/reg/all
// http://localhost:3000/reg/all?id&email&password
regrouter.get('/all', (req, res) => {
    
    var qry = req.query
    console.log(qry)

    regModel.find({}, qry).then(c => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(c);
        console.log("Result successfully")
    }).catch(err => {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.json("Error : " + err.errmsg);
        console.log(err);
    })
})

// http://localhost:3000/reg/update/hari@gmail.com
// Post Data : {"phone": "9659"}
regrouter.put('/update/:email', (req, res) => {

    var qry = req.query
    console.log("Req Qry : " , qry)
    var params = req.params
    console.log("Req Params: " , params)
    var body = req.body
    console.log("Req Body : ", body)

    regModel.updateOne(
        { email: params.email },
        {
            $set: { "phone": body.phone}
        }).then(c => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(c);
            console.log("Result Updated successfully")
        }).catch(err => {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.json("Error : " + err.errmsg);
        console.log(err);
    })
})


// http://localhost:3000/reg/delete/hari@gmail.com
regrouter.delete('/delete/:email', (req, res) => {

    var qry = req.query
    console.log("Req Qry : ", qry)
    var params = req.params
    console.log("Req Params: ", params)
    var body = req.body
    console.log("Req Body : ", body)

    regModel.deleteOne({ email: params.email })
        .then(c => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(c);
            console.log("Result Delete successfully")
        }).catch(err => {
            res.statusCode = 403;
            res.setHeader('Content-Type', 'application/json');
            res.json("Error : " + err.errmsg);
            console.log(err);
        })
})

module.exports = regrouter;


