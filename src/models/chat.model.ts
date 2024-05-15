import {DataTypes} from "sequelize";
import {sequelize} from "../config/config.database";

export const ChatModel = sequelize.define(
    'Chat',
    {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        link : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    },
    {
        freezeTableName : true,
        createdAt : false,
        updatedAt : false
    }
)
