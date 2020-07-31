import { Router } from 'express';

import TableService from '../service/TableService';
import * as API from '../config/api';

export const table = Router();
let tableService = new TableService();

/**
 * 登录注册信息
 */
table.post(API.getTableAll, async (req, res, next) => {
    try {
        let result = await tableService.getTableAll(req.body["data"]);
        res.json(result);
    } catch (e) {
        next(e);
    }
});
