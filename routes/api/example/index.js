const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Usuarios' })
})

router.use('/', [
  require('./find.router')
])

module.exports = router
