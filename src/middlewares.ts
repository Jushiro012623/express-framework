import bodyParser from "body-parser";
import { Application } from "express";
import { errorHandler } from "./middlewares/error-handler";
import NotFoundException from "./exeptions/not-found.exception";
import { UserController } from "./user/user.controller";

class AppMiddleware {

    readonly app: Application;

    private controller = [
        UserController
    ]

    constructor(app: Application) {
        this.app = app
    }

    public parser() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    public security() {

    }

    public routes() {
        this.router(this.app, this.controller)
        this.app.all("/{*splat}", () => { throw new NotFoundException('Route not found') });
        this.app.use(errorHandler)
    }

    private router(app: any, controllers: any[]) {
        controllers.forEach((ControllerClass) => {
            const instance = new ControllerClass();
            const prefix = Reflect.getMetadata('prefix', ControllerClass);
            const routes = Reflect.getMetadata('routes', ControllerClass) || [];
            routes.forEach((route: any) => {
                app[route.method](
                    `${prefix}${route.path}`,
                    instance[route.handlerName].bind(instance)
                );
            });
        });
    }

}

export default AppMiddleware