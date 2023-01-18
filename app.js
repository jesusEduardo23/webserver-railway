const express = require('express');
 require('dotenv').config();
const hbs = require('hbs');
const app = express();


const port = process.env.PORT;


app.use(express.static('public'));
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home',{

        titulo:'curso node',
        nombre:'jesus Herrera'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{

        titulo:'curso node',
        nombre:'jesus Herrera'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements',{

        titulo:'curso node',
        nombre:'jesus Herrera'
    });
})
app.listen(port)