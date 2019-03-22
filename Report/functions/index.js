const express = require("express")
const path = require("path")
const routes = require('./routes/index')
const app = express()

app.set('views', path.join(__dirname, 'html'))

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static('html'))

app.set('view engine', 'ejs')
 
app.use('/', routes)

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.use(function(req, res, next){
    res.status(404).render('404')
})