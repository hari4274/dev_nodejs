console.log("Hello Node");
const https = require("https");
const fs = require("fs");
const _ = require('lodash');
const nodeSt = require('./node-start');

// node index.js remove
console.log(process.argv);
var command = process.argv[2];
console.log(command);

if (command == 'list') {
    console.log("List all notes");
} else if (command == 'read') {
    console.log("Read Note");
} else if (command == 'create') {
    console.log("Note Created");
} else if (command == 'remove') {
    console.log("Note Removed");
} else {
    console.log("command Not Found");
}


