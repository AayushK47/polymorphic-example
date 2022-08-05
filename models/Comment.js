const Sequelize = require('sequelize');

const conn = require('../db');

const Comment = conn.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    headline: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    likes: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

});

module.exports = Comment;