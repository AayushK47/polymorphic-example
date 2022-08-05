const Sequelize = require('sequelize');

const conn = require('../db');

class Image extends Sequelize.Model {}
Image.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, { sequelize: conn, modelName: 'images' });

module.exports = Image;