const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const Odoo = require("odoo-xmlrpc")
const request = require('request')

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.get('/', function (req, res) {
    // res.status(200).send({ "message": "Data received" });
    res.send({ "message": "Data received" })  // Error Unauthorized
})

/* app.post('/enroll', function (req, res) {
    console.log(req.body);
    res.status(200).send({ "message": "Data received" })
    // res.status(401).send({"message": "Data received"})  // Error Unauthorized
})
*/

// Odoo Implement
var odooConfig = {
    url: "http://localhost",
    port: 8076,
    db: 'astir_live01042019',
    username: 'admin',
    password: 'admin'
}

const odoo = new Odoo(odooConfig);

// Get Odoo Session
var odooSession = () => {
    let url = odooConfig.url + ":" + odooConfig.port + "/web/session/authenticate"
    let req_data = {
        "jsonrpc": "2.0",
        "method": "authenticate",
        "params": {
            "context": {},
            "db": odooConfig.db,
            "login": odooConfig.username,
            "password": odooConfig.password
        },
        "id": null
    }
    request.post(url, { json: req_data }, (err, res, body) => {
        if (err) { return console.log(err); }
        // console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        return body;
    })
}

var odooPost = (url, reqJson) => {
    let cookieText = '';
    
    cookieText = 'session_id=' + odooSession().result.session_id;
    console.log(cookieText);
    
    let options = {
        headers: {
            // 'User-Agent': 'request',
            // 'host': 'localhost:3000',
            'Cookie': cookieText //this is where you set custom cookies
        },
        data: reqJson
    };

    var callback = (err, res, body) => {
        if (err) { return console.log(err); }
        if (!err) {
            let info = JSON.parse(body);
            console.log(info);
            return info
        }
    }

    // request(url, options, callback);
}


app.get('/connectStatus', function (req, res) {
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        let odooMsg = {"message": "Odoo Connected", "Odoo": odoo}
        console.log(odooMsg);
        res.status(200).send(odooMsg);
    });
})

app.get('/test', function (req, res) {
    let url = odooConfig.url + ":" + odooConfig.port + "/web/session/authenticate"
    console.log(url);
    let sessionData = {};

    let req_data = {
        "jsonrpc": "2.0",
        "method": "authenticate",
        "params": {
            "context": {},
            "db": odooConfig.db,
            "login": odooConfig.username,
            "password": odooConfig.password
        },
        "id": null
    }
    
    request.post(url, { json: req_data }, (error, res1, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${res1.statusCode}`)
        console.log(body)
        this.sessionData = body
    })
    res.send(this.sessionData)
})

app.get('/connectStatus', function (req, res) {
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        let odooMsg = { "message": "Odoo Connected", "Odoo": odoo }
        console.log(odooMsg);
        res.status(200).send(odooMsg);
    });
})
app.get('/testRead', function (req, res) {
    let url = odooConfig.url + ":" + odooConfig.port + "/web/dataset/search_read"
    let req_data = { "jsonrpc": "2.0", "method": "call", "params": { "model": "res.users", "fields": ["name"], "domain": [["id", "=", 1]], "context": { "lang": "en_US", "tz": "Australia/Sydney", "uid": 1 }, "offset": 0, "limit": 1, "sort": "" }, "id": 8680135670 }
    let result = odooPost(url, req_data);
    console.log(result);
    res.send(result);       
})

            
// Listen
app.listen(PORT, function () {
    console.log("Server running on localhost: " + PORT);
})