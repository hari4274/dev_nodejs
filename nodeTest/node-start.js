console.log("Node Started...");

module.exports.addNote = () => {
    console.log("Add note Called");
    return "New Note Created"
}

module.exports.addVals = (a, b) => {
    console.log("Add function Called.");
    return a + b;
}