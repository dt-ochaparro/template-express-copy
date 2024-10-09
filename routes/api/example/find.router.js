const router = require('express').Router()

const controller = require('../../../src/example/infrastructure/controller/find.controller')

router.get('/:id', controller)

module.exports = router
