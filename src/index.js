const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const sass = require('node-sass')

//DB
const db = require('./config/db')
//Connect to DB
db.connect()

const app = express()
const port = 3000

//truyền file routes vào
const route = require('./routes')

//logo
app.use(express.static(path.join(__dirname, 'public')))
app.use('/img', express.static(path.join(__dirname, '/public/img')))
//HTTP logger
//app.use(morgan('combined'));

//template engine handlebars
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//middleware express body parse POST method
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

//Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})
