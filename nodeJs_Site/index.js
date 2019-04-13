const express = require('express');
const app = express();

// Middleware
app.use(express.static("public"));  /*  Adding Static Folder/Files */

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.get('/about', (req, res) => {
    res.send("About Page");
})

app.listen(3000);