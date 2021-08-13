const { Sequelize, DataTypes, Model } = require('sequelize');

const host = process.env.DB_HOST || 'mysqldb';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || 'p@ssw0rd1';
const database = process.env.DB_DATABASE || 'inventory';

module.exports = {
    // TODO connection pooling
    Sequel: class Sequel {
        constructor() {
            this.sequel = new Sequelize(database, user, password, {
                host: host,
                dialect: 'mysql'
            });

            this.User = this.sequel.define('User', {
                // Model attributes are defined here
                username: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull:false
                }
                }, {
                // Other model options go here
                });
            this.User.sync({ alter: true })

            this.sequel.authenticate();
        }

        async addUser(username, password){
            return await this.User.create({
                username,
                password
            });
        }

        async findByUser(username){
            return await this.User.findOne({ where: { user: username } });
        }
    }
}
