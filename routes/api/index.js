const router = require('express').Router()

// Si visita la ruta /api, se le redirige a /api/example
router.get('/', (req, res) => {
  res.render('index', { title: 'API' })
})
router.use('/example', require('./example'))
router.use('/sap', require('./sap'))

module.exports = router
