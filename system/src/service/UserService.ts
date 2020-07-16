import UserDao from '../dao/UserDao';

export default class TestService {

    /**
     * service 注册服务器
     * @param name 用户名称
     * @param password 用户密码
     */
    async getUser(name: string, password: string) {
        const userDao = new UserDao();
        try {
            return await userDao.getUser(name, password);
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

    async getUserById(id: Number) {
        const userDao = new UserDao();
        try {
            return await userDao.getUserById(id);
        } catch (error) {
            throw new Error(error)
        }
    }

}