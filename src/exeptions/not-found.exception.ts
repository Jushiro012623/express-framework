import { Response } from "../constants/response";
import AppError from "../utils/app-error";

class NotFoundException extends AppError {
  constructor(message: string) {
    super(message, Response.NOT_FOUND);
  }
}

export default NotFoundException