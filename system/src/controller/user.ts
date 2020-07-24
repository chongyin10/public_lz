import { Router } from 'express';
import UserService from '../service/UserService';
import * as API from '../config/api';
// import { resultUtils } from '../utils/utils';

export const user = Router();
let userService = new UserService();

/**
 * 获取所有用户
 */
user.post(API.getUserAll, async (req, res, next) => {
    try {
        let result = await userService.getUserAll(req.body["data"], req.body['page']);
        res.json(result);
    } catch (e) {
        next(e);
    }
});

user.post(API.addUser, async (req, res, next) => {
    try {
        let result = await userService.addUser(req.body["data"]);
        res.json(result);
    } catch (e) {
        next(e);
    }
});
