import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import UserService from '../service/UserService';
import * as API from '../config/api';

export const login = Router();
let userService = new UserService();

/**
 * 登录注册信息
 */
login.post(API.getUser, async (req, res, next) => {
    try {
        const name = req.body['name'];
        const password = req.body['password'];
        let result = await userService.getUser(name, password);
        let cookieCatch: any = req.headers.cookie || [];
        if (cookieCatch.indexOf('lz_cookie') === -1) {
            if (result && result.length > 0) {
                res.cookie('lz_cookie', uuidv4(name+password)+cookieCatch, { maxAge: 900000, httpOnly: true })
            }
        } else {
            console.log('cookie已经存在')
        }
        res.json(result);
    } catch (e) {
        next(e);
    }
});
