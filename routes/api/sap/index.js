const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Usuarios' })
})

router.use('/', [
  require('./oitm.router')
])

module.exports = router
