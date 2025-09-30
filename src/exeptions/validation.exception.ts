import { Response } from "../constants/response";
import AppError from "../utils/app-error";

class ValidationException extends AppError {
    public details

    constructor(message: string, details: any = []) {
        super(message, Response.UNPROCESSABLE_ENTITY);
        this.details = details
    }
}

export default ValidationException