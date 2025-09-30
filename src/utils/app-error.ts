class AppError extends Error {
    public status
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export default AppError