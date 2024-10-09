const swaggerJsDoc = require('swagger-jsdoc')
const glob = require('glob')
const config = require('../../config/swagger.config')[process.env.NODE_ENV]
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for Express.js application',
      contact: {
        name: 'API Support',
        email: 'sistemas@daily-tech.co'
      }
    },
    servers: config,
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT' // Cambia esto según el formato del token
        }
      },
      schemas: require('./schemas/index')
    },
    tags: [
      {
        name: 'API'
      }
    ],
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: glob.sync('./routes/api/**/*.js') // Busca todos los archivos de rutas en subdirectorios
}

const swaggerSpec = swaggerJsDoc(options)

module.exports = swaggerSpec
