import { Request, Response } from 'express';
import { User, users } from './user.model';
import NotFoundException from '../exeptions/not-found.exception';
import ValidationException from '../exeptions/validation.exception';
import { Response as HttpResponse } from '../constants/response';
import { Injectable } from '../utils/decorators/injecting';

@Injectable()
export class UserServices {
    private users: User[] = users;

    private sanitize(user: User) {
        const { password, ...rest } = user;
        return rest;
    }

    findAll(req: Request, res: Response) {
        const limit = Number(req.query.limit) || this.users.length;
        const sanitizedUsers = this.users.slice(0, limit).map(this.sanitize);
        return res.json({
            message: 'Users fetched successfully',
            status: HttpResponse.OK,
            data: sanitizedUsers,
        });
    }

    findOne(req: Request, res: Response) {
        const id = Number(req.params.id);
        const user = this.users.find(u => u.id === id);
        if (!user) throw new NotFoundException('No user found');

        return res.json({
            message: 'User fetched successfully',
            status: HttpResponse.OK,
            data: this.sanitize(user),
        });
    }

    create(req: Request, res: Response) {
        const { username, email, password } = req.body;

        const newUser: User = {
            id: (this.users[this.users.length - 1]?.id ?? 0) + 1,
            username,
            email,
            password,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        this.users.push(newUser);

        return res.status(HttpResponse.CREATED).json({
            message: 'User created successfully',
            status: HttpResponse.CREATED,
            data: this.sanitize(newUser),
        });
    }

    update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) throw new NotFoundException('No user found');

        const existing = this.users[index];
        if (!existing) throw new NotFoundException('No User Found')

        const { username, email } = req.body;

        const updated: User = {
            ...existing,
            username: username ?? existing.username,
            email: email ?? existing.email,
            updated_at: new Date().toISOString(),
        };

        this.users[index] = updated;

        return res.json({
            message: 'User updated successfully',
            status: HttpResponse.OK,
            data: this.sanitize(updated),
        });
    }

    delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) throw new NotFoundException('No user found');

        const [deletedUser] = this.users.splice(index, 1);

        return res.json({
            message: 'User deleted successfully',
            status: HttpResponse.OK,
            data: this.sanitize(deletedUser!),
        });
    }
}
