const { appDataSource } = require('../../database/typeOrm/sap')
const dayjs = require('dayjs')
const chalk = require('chalk')
chalk.level = 3 // Forzar a usar colores completos

module.exports = async () => {
  try {
    await appDataSource.initialize()

    console.log(chalk.blue(`[Sequelize] Conexión: ${appDataSource.options.name} --- Database: ${appDataSource.options.schema} --- Fecha Hora: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`))
    console.log(chalk.green('La conexión se ha establecido correctamente.'))
  } catch (error) {
    console.error(chalk.red('No se puede conectar a la base de datos: '), chalk.red(error))
  }
}
