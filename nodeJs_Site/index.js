const express = require('express');
const app = express();

// Middleware
app.use(express.static("public"));  /*  Adding Static Folder/Files */
app.set('view engine', 'ejs');  /* Set default 'view engine' key or 'ejs' engine for views */

app.get(['/'], (req, res) => {
    res.render("index", {
        title: "Home"
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        title: "About Us"
    });
});

app.get('/blog-detail', (req, res) => {
    res.render("blog-detail", {
        title: "Blog Details"
    });
});

app.get('/blog', (req, res) => {
    res.render("blog", {
        title: "Blog"
    });
});

app.get('/cart', (req, res) => {
    res.render("cart", {
        title: "Cart"
    });
});

app.get('/contact', (req, res) => {
    res.render("contact", {
        title: "Contact"
    });
});

app.get('/home-02', (req, res) => {
    res.render("home-02", {
        title: "Home-02"
    });
});

app.get('/home-03', (req, res) => {
    res.render("home-03", {
        title: "Home-03"
    });
});

app.get('/product', (req, res) => {
    res.render("product", {
        "title": "Women's Collection"
    });
});

app.get('/product-detail/:id', (req, res) => {
    var id = req.params.id;
    var data = [
        {
            id: 1,
            productName: "Chudithar"
        },
        {
            id: 2,
            productName: "Salwar"
        },
    ]
    var result;
    data.forEach((product) => {
        if (product.id == id) {
            result = product;
            return true;
        }
    })
    console.log(result);
    res.render("product-detail", {
        title: "Product Detail " + id,
        product : result
    });
});


// client side(json) redenring above are server side rendring
app.get('/api', (req, res) => {
    res.json({
        "name": "Hariprasath.B"
    });
});


app.listen(3000);