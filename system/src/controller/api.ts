import { Router } from 'express';
import ApiService from '../service/ApiService';
import * as API from '../config/api';

export const api = Router();
let apiService = new ApiService();

/**
 * 获取所有api
 */
api.post(API.getApiAll, async (req, res, next) => {
    try {
        res.json(await apiService.getApiAll());
    } catch (e) {
        next(e);
    }
});

/**
 * 分页获取所有api
 */
api.post(API.getApiList, async (req, res, next) => {
    try {
        res.json(await apiService.getApiList(req.body["data"], req.body['page']));
    } catch (e) {
        next(e);
    }
});

/**
 * 添加数据
 */
api.post(API.addApi, async (req, res, next) => {
    try {
        res.json(await apiService.addApi(req.body["data"], req.body['page']));
    } catch (e) {
        next(e);
    }
});

/**
 * 删除数据
 */
api.post(API.delApi, async (req, res, next) => {
    try {
        res.json(await apiService.delApi(req.body["id"], req.body["page"]));
    } catch (e) {
        next(e);
    }
});




