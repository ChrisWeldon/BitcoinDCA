const { Sequelize } = require('sequelize');

const host = process.env.DB_HOST || 'mysqldb';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || 'p@ssw0rd1';
const database = process.env.DB_DATABASE || 'inventory';

module.exports = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql'
});
