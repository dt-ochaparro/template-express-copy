const router = require('express').Router()

const controller = require('../../../src/sap/infrastructure/controllers/oitm.controller')

router.get('/oitm/:id', controller)

module.exports = router
