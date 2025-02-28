const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Import the engine function from express-handlebars
const app = express();
const port = 3000;

// Use morgan for logging HTTP requests
app.use(morgan('combined'));

// Configure the Handlebars engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/shopingcart', (req, res) => {
    res.render('shopingcart');
});

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
