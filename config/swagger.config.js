module.exports = {
    development: [
      {
        url: `${process.env.APP_DOMAIN}:${process.env.APP_PORT}` // Cambia esto según la URL de tu aplicación
      }
    ],
    test: [
      {
        url: `${process.env.APP_DOMAIN}:${process.env.APP_PORT}`
      }
    ],
    production: [
      {
        url: `${process.env.APP_DOMAIN}`
      }
    ]
  }