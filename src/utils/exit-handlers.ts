class ApplicationError {

    public handle() {
        process.on('uncaughtException', (error: Error) => {
            console.error(`There was an uncaught error: ${error}`);
            ApplicationError.shutDownProperly(1);
        });

        process.on('unhandledRejection', (reason: Error) => {
            console.error(`Unhandled rejection at promise: ${reason}`);
            ApplicationError.shutDownProperly(2);
        });

        process.on('SIGTERM', () => {
            console.error('Caught SIGTERM');
            ApplicationError.shutDownProperly(2);
        });

        process.on('SIGINT', () => {
            console.error('Caught SIGINT');
            ApplicationError.shutDownProperly(2);
        });

        process.on('exit', () => {
            console.error('Exiting');
        });
    }

    private static shutDownProperly(exitCode: number): void {
        Promise.resolve()
            .then(() => {
                console.info('Shutdown complete');
                process.exit(exitCode);
            })
            .catch((error) => {
                console.error(`Error during shutdown: ${error}`);
                process.exit(1);
            });
    }
}

export default ApplicationError;