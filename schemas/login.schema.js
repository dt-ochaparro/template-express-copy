module.exports = {
    type: 'object',
    properties: {
      password: {
        type: 'string',
        description: 'Contraseña del usuario',
        example: process.env.NODE_ENV === 'development' ? '' : ''
      },
      username: {
        type: 'string',
        description: 'Nombre de usuario',
        example: process.env.NODE_ENV === 'development' ? '' : ''
      }
    }
  }