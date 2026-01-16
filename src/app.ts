import express, { Application } from 'express';
import AppMiddleware from './middlewares';

class ExpressApp {

    readonly app: Application
    readonly middleware: AppMiddleware

    constructor() {
        this.app = express()
        this.middleware = new AppMiddleware(this.app)
    }

    public start() {
        this.middleware.security()
        this.middleware.parser()
        this.middleware.routes()
        return this.app;
    }
}

export default ExpressApp





