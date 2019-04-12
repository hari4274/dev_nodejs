console.log("Started..!!!");
const https = require("https");
const fs = require("fs");

// Custom Requires
const nodeSt = require('./node-start');


/* https.get('https://raw.githubusercontent.com/hari4274/AngularForms/master/server/package.json', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);
        fs.appendFile("response_json.json", d);
    });
}); */

console.log(nodeSt.addNote())
var x = 5;
var y = 6;

console.log(nodeSt.addVals(x, y));