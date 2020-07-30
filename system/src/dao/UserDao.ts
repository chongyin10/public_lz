import { User } from '../models/User';
import QuerySql from '../utils/SqlQuery';

export default class UserDao extends User {
    protected querySql = new QuerySql()
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

    /**
     * 
     * @param id 
     */
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

    /**
     * 分页 获取用户
     * @param search 
     * @param page
     */
    async getUserAll(search: any, page: number,) {
        return await this.querySql.queryLimitSql(User, search, page)
    }

    /**
     * 新增用户
     * @param user 
     */
    async addUser(user: User) {
        return await User.create(user)
    }

    /**
     * 删除用户
     * @param id 主键id
     */
    async delUser(id: Number) {
        return await User.destroy({
            where: {
                id: Number(id)
            }
        }).then((res) => {
            return res
        })
    }
}