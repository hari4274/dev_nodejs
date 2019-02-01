var express = require("express")
var app = express()

var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var regRouter = require('./routes/reg_router')
var morgan = require("morgan")


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('dev')) // For Log watcher

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/reg',regRouter)


// 'mongodb://host:dbport/database_name'  --> (if db exists, connect or create db as db_name)
mongoose.connect('mongodb://localhost:27017/simpleAPI',(err,data) => {
    if(err){
        console.log(err)
    }

    console.log("Mongodb successfully connected")
})


var port = process.env.PORT || 3000;

app.listen(port,(err,res) =>{

        if(err){
            console.log(err)
        }


        console.log(`server running at port ${port}`)
})

