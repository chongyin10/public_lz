import { Router } from 'express';
import UserService from '../service/UserService';
import * as API from '../config/apis';

export const users = Router();
let userService = new UserService();

users.post(API.getUserInfo, async (req, res, next) => {
    const username = req.body['username'].toString();
    const password = req.body['password'].toString();
    try {
        res.json(await userService.getUser(username, password));
    } catch (e) {
        next(e);
    }
});

users.post(API.getUserAll, async (req, res, next) => {
    try {
        res.json(await userService.getUserAll(req.body['param']));
    } catch (e) {
        next(e);
    }
});

users.post(API.addUser, async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

users.post(API.delUser, async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

users.post(API.updateUser, async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

