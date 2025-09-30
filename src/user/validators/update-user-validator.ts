import { body, ValidationChain } from 'express-validator';

export const UpdateUserSchema: ValidationChain[] = [
    body('username')
        .optional()
        .isString().withMessage('Username must be a string'),

    body('email')
        .optional()
        .isEmail().withMessage('Email must be valid email address'),

    body('password')
        .optional()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];
