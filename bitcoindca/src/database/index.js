const { Sequelize, DataTypes, Model } = require('sequelize');

const host = process.env.DB_HOST || 'mysqldb';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || 'p@ssw0rd1';
const database = process.env.DB_DATABASE || 'inventory';

const sequel = new Sequelize(database, user, password, {
	host: host,
	dialect: 'mysql',
	logging: false
});

const models = [
	require('./models/user.model'),
	require('./models/task.model'),
	// Add more here
];

// initialize the models
for (const model of models) {
	model(sequel);
}

// import them for addition provisioning
const { User, Task } = sequel.models;

User.hasMany(Task);
Task.belongsTo(User);

sequel.sync({alter:true})

// We export the sequelize connection instance to be used around our app.
module.exports = sequel;
