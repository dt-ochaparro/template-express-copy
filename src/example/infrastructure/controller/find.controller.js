const useCase = require('../../application/find.useCase')

module.exports = (req, res, next) => {
  useCase(req).then((data) => {
    res.json(data)
  }).catch((err) => { next(err) })
}
