const express = require('express');
const app = express();

// Middleware
app.use(express.static("public"));  /*  Adding Static Folder/Files */
app.set('view engine', 'ejs');  /* Set default 'view engine' key or 'ejs' engine for views */

app.get(['/', '/index'], (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/blog-detail', (req, res) => {
    res.render("blog-detail");
});

app.get('/blog', (req, res) => {
    res.render("blog");
});

app.get('/cart', (req, res) => {
    res.render("cart");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/home-02', (req, res) => {
    res.render("home-02");
});

app.get('/home-03', (req, res) => {
    res.render("home-03");
});

app.get('/product-detail', (req, res) => {
    res.render("product-detail");
});

app.get('/product', (req, res) => {
    res.render("product");
});

// client side(json) redenring above are server side rendring
app.get('/api', (req, res) => {
    res.json({
        "name": "Hariprasath.B"
    });
});


app.listen(3000);