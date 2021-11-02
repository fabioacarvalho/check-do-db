// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'check_do',
    user:     'root',
    password: '123456789'
  },
  pool: {
    min: 2,
    max: 10
  }
};
