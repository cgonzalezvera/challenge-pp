import express from 'express';
import { WebApiConfig } from './webApi.config'
import { ENVCONFIG } from './config'

const app = express();

async function main() {
    const app = new WebApiConfig(ENVCONFIG.PORT, ENVCONFIG.NODE_ENV);
    await app.setup()
        .listen();
}

main();