console.log("Started..!!!");
const https = require("https");
const fs = require("fs");
const _ = require('lodash');

// Custom Requires
const nodeSt = require('./node-start');


/* https.get('https://raw.githubusercontent.com/hari4274/AngularForms/master/server/package.json', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);
        fs.appendFile("response_json.json", d);
    });
}); */

// console.log(nodeSt.addNote())

// console.log(nodeSt.addVals(5, -7));

// console.log(_.isString("ABC"));
// console.log(_.isString(23));

var filteredArray = _.uniq(['Hari', 1,2,'Hari', 'hari', 1,3,2,24])
console.log(filteredArray);