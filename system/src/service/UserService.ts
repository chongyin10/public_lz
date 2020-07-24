import UserDao from '../dao/UserDao';
import { User } from '../models/User';
import { resultUtils } from '../utils/utils';

export default class UserService {

    /**
     * service 注册服务器
     * @param name 用户名称
     * @param password 用户密码
     */
    async getUser(name: string, password: string) {
        const userDao = new UserDao();
        try {
            let user = await userDao.getUser(name, password);
            if (user && user.length > 0) {
                await this.updateUserByLastTIme(user[0]["id"]);
            }
            return user;
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 更新登录时间
     * @param id 
     */
    async updateUserByLastTIme(id: Number) {
        const userDao = new UserDao();
        try {
            return await userDao.updateUserByLastTIme(id);
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 更新登录状态
     * @param id 主键ID
     * @param status 登录状态
     */
    async updateUserByStatus(id: Number, status: Number) {
        const userDao = new UserDao();
        try {
            return await userDao.updateUserByStatus(id, status);
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 根据id获取用户
     * @param id 
     */
    async getUserById(id: Number) {
        const userDao = new UserDao();
        try {
            return await userDao.getUserById(id);
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 
     * @param user 
     */
    async getUserAll(user: User, page: Number) {
        const userDao = new UserDao();
        try {
            return await userDao.getUserAll(user, page);
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 新增用户
     * @param user 
     */
    async addUser(user: User) {
        const userDao = new UserDao();
        try {
            let { dataValues }: any = await userDao.addUser(user);
            let result = resultUtils("200", '新增成功', dataValues)
            return result
        } catch (error) {
            return resultUtils("202", '已存在用户，不可重复添加',[])
        }
    }

}