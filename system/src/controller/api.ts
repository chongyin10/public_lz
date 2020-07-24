import { Router } from 'express';
import ApiService from '../service/ApiService';
import * as API from '../config/api';

export const api = Router();
let apiService = new ApiService();

/**
 * 获取所有用户
 */
api.post(API.getApiAll, async (req, res, next) => {
    try {
        res.json(await apiService.getApiAll());
    } catch (e) {
        next(e);
    }
});
