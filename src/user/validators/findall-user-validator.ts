import { query, ValidationChain } from 'express-validator';

export const FindAllUserSchema: ValidationChain[] = [
    query("limit")
        .optional()
        .isNumeric().withMessage("Invalid limit value")
];
