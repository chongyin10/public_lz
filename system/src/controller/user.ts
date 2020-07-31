import { Router } from 'express';
import UserService from '../service/UserService';
import * as API from '../config/api';
import { resultUtils } from '../utils/utils';

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

/**
 * 
 */
user.post(API.getUserById, async (req, res, next) => {
    try {
        let data = await userService.getUserById(req.body["id"]);
        let result: any = [];
        if (data) {
            result = await resultUtils(true, '成功', { list: data });
        } else {
            result = await resultUtils(true, '失败', []);
        }
        res.json(result);
    } catch (e) {
        next(e);
    }
});

/**
 * 
 */
user.post(API.updateUser, async (req, res, next) => {
    try {
        res.json(await userService.updateUser(req.body["data"], req.body["id"], req.body["page"]));
    } catch (e) {
        next(e);
    }
});

