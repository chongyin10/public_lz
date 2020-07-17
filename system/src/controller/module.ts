import { Router } from 'express';
import ModuleService from '../service/ModuleService';
import * as API from '../config/api';

export const module = Router();
let moduleService = new ModuleService();

module.post(API.getModuleAll, async (req, res, next) => {
    console.log('@@@@进来了')
    try {
        res.json(await moduleService.getModuleAll());
    } catch (e) {
        next(e);
    }
});
