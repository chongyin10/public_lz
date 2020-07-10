import { Router } from 'express';
import ItemService from '../service/ItemService';
import * as API from '../config/apis';

export const items = Router();

let itemService = new ItemService();

/**
 * 获取菜单栏数据
 */
items.get(API.getMenus, async (req, res, next) => {
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
items.get(API.getRegister, async (req, res, next) => {
    try {
        res.json(await itemService.getItemRegister());
    } catch (e) {
        next(e);
    }
});

/**
 *  获取所有功能栏
 */
items.get(API.getItemAll, async (req, res, next) => {
    try {
        res.json(await itemService.getItemAll());
    } catch (e) {
        next(e);
    }
})


