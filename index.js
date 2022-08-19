const express = require('express')

const exphbs = require('express-handlebars')

const conn = require('./db')

const productsRoutes = require('./routes/productsRoutes')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(express.json())

app.use('/', productsRoutes)

app.listen(3000)
