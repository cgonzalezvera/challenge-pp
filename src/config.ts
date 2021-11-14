import dotenv from 'dotenv';
import path from 'path';

function initConfig(): void {

    const ENV_VAR = process.env.NODE_ENV || process.env.APP_ENV;

    if (ENV_VAR) {
        dotenv.config({
            path: path.resolve(process.cwd(), '.env.' + ENV_VAR.trim())
        });
    } else {
        dotenv.config();
    }
}

initConfig();

const DEFAULT_PORT: number = 3000;
const DEAFULT_ENV = 'DESARROLLO';
const URL_IP_API = "http://ip-api.com/json";
const API_KEY_OPEN_WEATHER_SERVICE = "9769fad50c6f439c69e4f4d03fc1ade6";

export const ENVCONFIG = {
    NODE_ENV: process.env.NODE_ENV || DEAFULT_ENV,
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || DEFAULT_PORT,
    LOGLEVEL: process.env.LOGLEVEL || 'ERROR',

    IS_URL: process.env.IS_URL || '',
    IS_CLIENT_ID: process.env.IS_CLIENT_ID || '',
    IS_CLIENT_SECRET: process.env.IS_CLIENT_SECRET || '',
    IS_GRANT_TYPE: process.env.IS_GRANT_TYPE || '',
    IS_SCOPE: process.env.IS_SCOPE || '',
    CI_BASE_URL: process.env.CI_BASE_URL || '',
    CO_BASE_URL: process.env.CO_BASE_URL || '',

    URL_IP_API_SERVICE: process.env.URL_IP_API_SERVICE || URL_IP_API,
    API_KEY_OPEN_WEATHER_SERVICE: process.env.API_KEY_OPEN_WEATHER_SERVICE || API_KEY_OPEN_WEATHER_SERVICE
}