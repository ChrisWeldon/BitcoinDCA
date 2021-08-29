const { DataTypes } = require('sequelize')


module.exports = (sequel) => {
    sequel.define('User', {
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

}
