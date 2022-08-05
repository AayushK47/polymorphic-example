const Sequelize = require('sequelize');

const conn = require('../db');

const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;
class Comment extends Sequelize.Model {
    getCommentable(options) {
      if (!this.commentableType) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
      return this[mixinMethodName](options);
    }
}
Comment.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    commentableType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    commentableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
}, { sequelize: conn, modelName: 'comments' });

Comment.addHook("afterFind", findResult => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (instance.commentableType === "image" && instance.image !== undefined) {
        instance.commentable = instance.image;
      } else if (instance.commentableType === "video" && instance.video !== undefined) {
        instance.commentable = instance.video;
      }
      // To prevent mistakes:
      delete instance.image;
      delete instance.dataValues.image;
      delete instance.video;
      delete instance.dataValues.video;
    }
});

module.exports = Comment;