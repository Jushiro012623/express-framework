import { body, ValidationChain } from 'express-validator';

export const CreateUserSchema: ValidationChain[] = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .isString().withMessage('Username must be a string'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email must be valid email address'),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];
