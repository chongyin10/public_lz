import { Router } from 'express';
import UserService from '../service/UserService';
import * as API from '../config/api';

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

/**
 * 
 */
user.post(API.addUser, async (req, res, next) => {
    try {
        let result = await userService.addUser(req.body["data"], req.body["page"]);
        res.json(result);
    } catch (e) {
        next(e);
    }
});

/**
 * 
 */
user.post(API.delUser, async (req, res, next) => {
    try {
        res.json(await userService.delUser(req.body["id"], req.body["page"]));
    } catch (e) {
        next(e);
    }
});
