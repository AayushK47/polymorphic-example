const Sequelize = require('sequelize');

const conn = require('../db');

const Video = conn.define('videos', {
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
});

module.exports = Video;