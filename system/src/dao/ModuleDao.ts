import { Module } from '../models/Module';

export default class ModuleDao extends Module {

    /**
     * 获取所有的module
     */
    async getModuleAll() {
        let module = await Module.findAll({
            order: [['weight', 'ASC']],
            raw: true
        });
        return module;
    }
}