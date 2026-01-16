import ExpressApp from "./app";
import config from "./config/app";
import ApplicationError from "./utils/exit-handlers";

const app = new ExpressApp();
const error = new ApplicationError()

error.handle()
app.start().listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});