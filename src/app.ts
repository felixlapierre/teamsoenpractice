import * as bodyParser from "body-parser";
import express from "express";
import {Routes} from "./routes/userRoute";

import {connect, Mongoose} from "mongoose";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = "mongodb://localhost:27017/userdb";

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private mongoSetup(): void {
        connect(this.mongoUrl, {useNewUrlParser: true});
    }
}

export default new App().app;
