const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;
 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

/*
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/test', function (req, res) {
    res.send('Hello Test Page')
});
*/

app.get('/', function (req, res) {
    res.render('home', {
        name: 'Marcos',
        title: 'Express Test App'
    });
});

app.get('/generic', function (req, res) {
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        name: 'Marcos',
        title: 'Express Test App'
    });
});

app.get('/elements', function (req, res) {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        name: 'Marcos',
        title: 'Express Test App'
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})