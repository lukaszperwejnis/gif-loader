require('dotenv').config();
import * as express from "express";
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import {errorMiddleware} from "./middlewares/errorMiddleware";
import {GifRoutes} from "./routes/gifRoutes";

export default class App {
    public app: express.Application;
    public port: number;
    constructor(port) {
        this.app = express();
        this.port = port;

        this.initMiddlewares();
        this.initRoutes();
    }

    private initMiddlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(errorMiddleware);
    }

    private initRoutes(): void {
        this.app.use('/gifs', GifRoutes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
