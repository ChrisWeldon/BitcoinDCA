const { DataTypes } = require('sequelize')

module.exports = (sequel) => {
    sequel.define('Task', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        time:{
            type: DataTypes.STRING,
            allowNull: false
        },
        amount:{
            type: DataTypes.FLOAT(10, 5),
            defaultValue:0.0
        },
        sun:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        mon:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        tue:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        wed:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        thu:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        fri:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        sat:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        }, {
        // Other model options go here
        });
}
