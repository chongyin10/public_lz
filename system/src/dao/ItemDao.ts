import { Item } from '../models/Item';

export default class TestDao extends Item {

    async getItem(level: number) {
        let items = await Item.findAll({
            where: {
                level,
                enable: 0
            },
            order: [
                ['weight', 'ASC']
            ],
            raw: true
        });
        return items;
    }

    /**
     * 获取所有注册的信息
     */
    async getItemRegister() {
        let items = await Item.findAll({
            attributes:['url', 'register'],
            where: {
                enable: 0
            },
            order: [
                ['weight', 'ASC']
            ],
            raw: true
        });
        return items;
    }

    /**
     * 获取二级目录
     * @param level 
     * @param menuItem 
     */
    async getSubItem(level: number, menuItem: number) {
        let items = await Item.findAll({
            where: {
                level,
                menuItem,
                enable: 0
            },
            order: [
                ['weight', 'ASC']
            ],
            raw: true
        });
        return items;
    }

    /**
     * 
     * @param id 
     */
    async getById(id: number) {
        let item = await Item.findByPk(id)
        return item
    }
}