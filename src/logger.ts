import fs from 'fs';
import { createSimpleLogger, Logger } from 'simple-node-logger';
import { ENVCONFIG } from './config';

let errorLog : Logger;
let infoLog : Logger;

const init = () => {
    if(!fs.existsSync('logs'))
        fs.mkdirSync('logs');
    
    errorLog = createSimpleLogger({
        logFilePath: 'logs/error.txt'
    });
    infoLog = createSimpleLogger({
        logFilePath: 'logs/info.txt'
    });
}

init();

export function logInfo(text: String) : void {
    if (ENVCONFIG.LOGLEVEL.includes('INFO')){
        infoLog.info(text);
    }
}
export function logError(err: String) : void {
    errorLog.error(err);
}