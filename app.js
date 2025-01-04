const express = require('express');
const app = express();
const Port = 8080;
const productRoute = require("./routes/Products")
const path = require('path')
const ejsMate = require('ejs-mate');
const Product = require('./models/Product');

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/mystore", productRoute);


app.listen(Port, () => {
    console.log(`Listining to the port ${Port}`)
})