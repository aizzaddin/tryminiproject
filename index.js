require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set("view engine", "ejs")
app.use(express.json())
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
}));

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.use('/api', require('./routes/authRoute'))
app.use(function (error, req, res, next) {
    res.send(error)
})


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`);
})