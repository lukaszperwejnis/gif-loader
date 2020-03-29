"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
class App {
    constructor(port) {
        this.app = express();
        this.port = port;
    }
    listen() {
        console.log('elo');
        this.app.listen(this.port, () => {
            console.log(process.env.PORT, 'port4k');
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map