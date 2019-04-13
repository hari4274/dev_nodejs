console.log("Hello Node");
const https = require("https");
const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

// node index.js remove
console.log("Process : ", process.argv);
console.log("Yargs : ", yargs.argv);
var argv = yargs.argv;

var command = argv._[0];

if (command == 'list') {
    notes.getAllNotes();
} else if (command == 'read') {
    notes.readNote(argv.title);
} else if (command == 'create') {
    notes.createNote(argv.title, argv.body);
} else if (command == 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log("command Not Found");
}


