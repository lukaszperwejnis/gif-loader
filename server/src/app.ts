require('dotenv').config();
import * as express from "express";

export default class App {
    public app: express.Application;
    public port: number;
    constructor(port) {
        this.app = express();
        this.port = port;
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
