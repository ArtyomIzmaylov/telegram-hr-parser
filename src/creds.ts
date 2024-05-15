import {configService, ConfigService} from "./config/config.service";

export const STRING_SESSION = configService.get('STRING_SESSION');
export const API_ID = parseInt(configService.get('API_ID'))
export const API_HASH = configService.get('API_HASH')

export const APP_PORT = parseInt(configService.get('APP_PORT'))

export const MESSAGE_LIMIT = parseInt(configService.get('MESSAGE_LIMIT'))