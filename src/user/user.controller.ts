import { Request, Response } from 'express';
import { Controller, Delete, Get, Post, Put } from '../utils/decorators/routing';
import { UserServices } from './user.services';
import { CreateUserSchema } from './validators/create-user-validator';
import { Validate } from '../utils/decorators/validator';
import { UpdateUserSchema } from './validators/update-user-validator';
import { FindAllUserSchema } from './validators/findall-user-validator';
import { Inject } from '../utils/decorators/injecting';

@Controller('/users')
export class UserController {

    @Inject(UserServices)
    private userServices!: UserServices

    @Get('/')
    @Validate(FindAllUserSchema)
    findAll(req: Request, res: Response) {
        return this.userServices.findAll(req, res)
    }

    @Get('/:id')
    findOne(req: Request, res: Response) {
        return this.userServices.findOne(req, res)
    }

    @Post("/")
    @Validate(CreateUserSchema)
    create(req: Request, res: Response) {
        return this.userServices.create(req, res)
    }

    @Put("/:id")
    @Validate(UpdateUserSchema)
    update(req: Request, res: Response) {
        return this.userServices.update(req, res)
    }

    @Delete("/:id")
    delete(req: Request, res: Response) {
        return this.userServices.delete(req, res)
    }
}