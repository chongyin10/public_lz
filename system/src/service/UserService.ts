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

}