
import express, { Application } from 'express'
import morgan from 'morgan'
import indexRoute from './routes/index.routes'
import location from './routes/location.routes'
import forecast from './routes/forecast.routes'
import current from './routes/current.routes';
import test from './routes/test.routes'
import { logInfo } from './logger';



export class WebApiConfig {
    public app: Application;

    constructor(
        private port?: number | string,
        private env?: string
    ) {
        this.app = express();

    }

    private get currentPort(): string {
        return this.app.get('port');
    }

    public setup(): WebApiConfig {
        this.app.set('port', this.port || process.env.PORT);
        this.middlewares();
        this.routes();

        return this;
    }


    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use("/", indexRoute)
        this.app.use(location);
        this.app.use(current);
        this.app.use(forecast);
        this.app.use(test);
    }

    public async listen(): Promise<void> {
        await this.app.listen(this.currentPort);
        logInfo(`Recibiendo solicitudes en puerto ${this.currentPort}`);
        logInfo(`Entorno: ${this.env}`)
    }

}