const { DataTypes } = require('sequelize')

module.exports = (sequel) => {
    sequel.define('Task', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount:{
            type: DataTypes.FLOAT(10, 5),
            defaultValue:0.0
        },
        time:{
            type: DataTypes.STRING,
            allowNull: false
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
        day_of_month:{
            type: DataTypes.INTEGER,
            allowNull:true
        },
        repeat:{
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue: 'weekly' //'monthly'
        }
        }, {
        // Other model options go here
        });
}
