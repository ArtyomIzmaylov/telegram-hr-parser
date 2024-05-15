
import {DataTypes} from "sequelize";
import {sequelize} from "../config/config.database";

export const MessageModel = sequelize.define(
    'Message',
    {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        username : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        message : {
            type : DataTypes.TEXT,
            allowNull : false,
        },
        category: {
            type : DataTypes.STRING,
            allowNull : true,
        },
        link : {
            type : DataTypes.STRING,
            allowNull : true
        }
    },
    {
        freezeTableName : true
    }
)
