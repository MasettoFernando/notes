"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      Note.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
      Note.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }
  
  Note.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isArchived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories', 
          key: 'id',
        },
        allowNull: false, 
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users', 
          key: 'id',
        },
        allowNull: true, 
      },
    },
    {
      sequelize,
      modelName: "Note",
      tableName: 'Notes',
      timestamps: true,
    }
  );
  
  return Note;
};
