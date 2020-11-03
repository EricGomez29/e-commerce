const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            defaultValue: '0'
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: '1'
        },
        image: {
            type: DataTypes.STRING
        }
    });
};