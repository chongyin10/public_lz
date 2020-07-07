import ItemDao from '../dao/ItemDao';

export default class ItemService {
    /**
     * 服务层
     * @param id 
     */
    async getById(id: number) {
        const itemDao = new ItemDao();
        try {
            return await itemDao.getById(id);
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 
     * @param level 
     * @param menuItem 
     */
    async getSubItem(level: number, menuItem: number) {
        const itemDao = new ItemDao();
        try {
            return await itemDao.getSubItem(level, menuItem);
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 
     */
    async getItem(level: number) {
        const itemDao = new ItemDao();
        try {
            let itemArray = await itemDao.getItem(level);
            return itemArray
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     *  获取所有功能
     */
    async getItemAll() {
        const itemDao = new ItemDao();
        try {
            return await itemDao.getItemAll();
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 获取注册器
     */
    async getItemRegister() {
        const itemDao = new ItemDao();
        try {
            return await itemDao.getItemRegister();
        } catch (error) {
            throw new Error(error)
        }
    }

}