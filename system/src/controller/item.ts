import { Router } from 'express';
import ItemService from '../service/ItemService';

export const items = Router();

let itemService = new ItemService();

/**
 * 获取菜单栏数据
 */
items.get('/getMenus', async (req, res, next) => {
    try {
        if (req.query['menuItem']) {
            res.json(await itemService.getSubItem(req.query['level'], req.query['menuItem']));
        } else {
            res.json(await itemService.getItem(req.query['level']));
        }

    } catch (e) {
        next(e);
    }
});

/**
 * 获取view注册器
 */
items.get('/getRegister', async (req, res, next) => {
    console.log('@注册器')
    try {
        res.json(await itemService.getItemRegister());
    } catch (e) {
        next(e);
    }
});


