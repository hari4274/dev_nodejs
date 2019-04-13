/* https.get('https://raw.githubusercontent.com/hari4274/AngularForms/master/server/package.json', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);
        fs.appendFile("response_json.json", d);
    });
}); */
var createNote = (title, body) => {
    console.log("Note Created ", title, body);
}

var getAllNotes = () => {
    console.log("Get All Notes");
}

var readNote = (title) => {
    console.log("Reading Note ", title);
}

var removeNote = (title) => {
    console.log("Revmoving Note ", title);
}

module.exports = {
    // createNote : createNote  (same key value)
    createNote,
    getAllNotes,
    readNote,
    removeNote
}