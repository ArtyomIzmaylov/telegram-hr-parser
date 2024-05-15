import {Sequelize} from "sequelize";
import {configService} from "./config.service";
export const sequelize = new Sequelize(
    configService.get('POSTGRES_DB'),
    configService.get('POSTGRES_USER'),
    configService.get('POSTGRES_PASSWORD'), {
        dialect: "postgres",
        host : "localhost",
        port: parseInt(configService.get('POSTGRES_PORT'))
});