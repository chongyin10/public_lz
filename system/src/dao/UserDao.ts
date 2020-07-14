import { User } from '../models/User';
import QuerySql from '../utils/SqlQuery';

export default class TestDao extends User {

    async getList() {
        let items = await User.findAll({
            raw: true
        });
        return items;
    };

    /**
     * 登录用户
     * @param username 
     * @param passwrod 
     */
    async getUser(username: string, passwrod: string) {
        let user = await User.findAll({
            where: {
                username: String(username),
                password: String(passwrod)
            },
            raw: true
        });
        return user;
    }

    /**
     * 查询所有数据
     * @param param 
     */
    async getUserAll(param: any) {
        let querySql = new QuerySql('user', this);
        let user: any = querySql.querySqlAll(param)
        return user;
    }

    async getById(id: number) {
        let item = await User.findByPk(id)
        return item
    }
}