console.log("Node Started");
module.exports.addNote = () => {
    console.log("Add note Called");
    return "New Note Created"
}

/* https.get('https://raw.githubusercontent.com/hari4274/AngularForms/master/server/package.json', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);
        fs.appendFile("response_json.json", d);
    });
}); */