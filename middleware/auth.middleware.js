const http = require('axios').default
const appConfig = require('../config/app.config')

module.exports = (req, res, next) => {
  http.defaults.baseURL = `${appConfig.services.security}/api/security`

  let { token } = req.query

  if (!token) {
    const { authorization } = req.headers
    if (authorization) {
      token = authorization.split(' ')[1]
    }
  }

  if (!token) throw { status: 401, message: 'Token requerido' }
  http.defaults.headers.Authorization = `Bearer ${token}`

  http.get('/me').then(({ data }) => {
    req.user = data
    return next()
  }).catch(err => {
    console.log(err)
    return res.status(401).json({ message: 'Error de autenticacion' })
  })
}
