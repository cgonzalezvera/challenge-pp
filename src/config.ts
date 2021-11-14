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
    URL_IP_API_SERVICE: process.env.URL_IP_API_SERVICE || URL_IP_API,
    API_KEY_OPEN_WEATHER_SERVICE: process.env.API_KEY_OPEN_WEATHER_SERVICE || API_KEY_OPEN_WEATHER_SERVICE
}