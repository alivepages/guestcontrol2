const devConfig = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: '3306',
    user: 'junior',
    password: 'muktek',
    database: 'guests'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
};

const prodConfig = Object.assign(
  {},
  devConfig,
  { host: '192.237.240.116', database: 'floreria_visitas', user: 'floreria_visitas', password: 'Visitas+32', }
)

module.exports = {
  development: devConfig,
  production: prodConfig
}
