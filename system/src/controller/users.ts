import { Router } from 'express';
import UserService from '../service/UserService';

export const users = Router();
let userService = new UserService();

users.post('/getUserInfo', async (req, res, next) => {
    const username = req.body['username'].toString();
    const password = req.body['password'].toString();
    try {
        res.json(await userService.getUser(username, password));
    } catch (e) {
        next(e);
    }
});
