module.exports = {
    env: process.env.NODE_ENV,
    host: '/api/{nombre-api}',
    services: {
      security: process.env.SECURITY_HOST
    }
  }
  