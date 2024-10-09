require('dotenv').config()
require('./utils/database/testConexion.utils')()
require('./utils/database/testConexionTypeOrm.utils')()
require('reflect-metadata')

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require("./utils/swagger/index"); // Ajusta la ruta según tu estructura

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')

const app = express()

// Agregar CORS
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api', apiRouter) // Agregar despues de /api/{ruta-microservicio}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log('Error: ', err)
  res.locals.message = err.message
  res.locals.errorType = err.errorType
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send({ message: err.message, errorType: err.errorType, info: err.info })
  // res.render('error')
})

module.exports = app
