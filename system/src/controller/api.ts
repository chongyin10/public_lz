import { Router } from 'express';
import ApiService from '../service/ApiService';
import * as API from '../config/apis';

export const apis = Router();
let apiService = new ApiService();

apis.post(API.getApiAll, async (req, res, next) => {
    try {
        res.json(await apiService.getApiByItemid(Number(req.body['itemid'])));
    } catch (e) {
        next(e);
    }
});

