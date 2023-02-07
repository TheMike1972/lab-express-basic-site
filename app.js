const express = require('express')

const hbs = require('hbs')

const app = express()

app.use(express.static(`${__dirname}/public`))

app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)

app.get('/', (request, response) => {
    response.render('home', {
        navbar: true,
    })
})

app.get('/about', (req, res) => {
    res.render('about', {navbar: true})
})

app.get('/discography', (req, res) => {
    res.render('discography', {navbar: true})
})
app.get('/gallery', (req, res) => {
    res.render('gallery', {navbar: true})
})

app.get('*', (req, res) => {
    res.render('error')
})

app.listen(3000, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log(`http://localhost:3000`)
})
