const database = require('../database/config')
module.exports = (req, res, next) => {
  req.database = database.postgres
  next()
}
