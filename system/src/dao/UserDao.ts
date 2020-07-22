import { User } from '../models/User';

export default class UserDao extends User {

    /**
     * 获取登录账户信息
     * @param name 
     * @param password 
     */
    async getUser(name: string, password: string) {
        let obj = await User.findAll({
            where: {
                name,
                password
            },
            raw: true
        });
        return obj;
    }

    /**
     * 更新登录状态
     * @param id 
     * @param status 
     */
    async updateUserByStatus(id: Number, status: Number) {
        let obj = await User.update({ status: Number(status) }, {
            where: {
                id: Number(id)
            },
        });
        return obj && obj.length[0] === 1 ? true : false;
    }

    async updateUserByLastTIme(id: Number) {
        let obj = await User.update({ lastTime: new Date() }, {
            where: {
                id: Number(id)
            },
        });
        return obj
    }

    /**
     * 主键查询登录用户
     * @param id 
     */
    async getUserById(id: Number) {
        let user = await User.findByPk(Number(id));
        return user;
    }
}