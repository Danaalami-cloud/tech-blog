const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}
//Can get away with only having a body
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id'
            }

        }

    },

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
)

module.exports = Comment;
