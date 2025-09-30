import { Response } from "../constants/response";
import AppError from "../utils/app-error";

class UnauthorizedException extends AppError {
    constructor(message: string = 'Unauthorized') {
        super(message, Response.UNAUTHORIZED);
    }
}

export default UnauthorizedException