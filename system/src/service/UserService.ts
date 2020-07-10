import UserDao from '../dao/UserDao';

export default class TestService {
    
    /**
     * 
     * @param username 用户名称
     * @param password 用户密码
     */
    async getUser(username: string, password: string) {
        const userDao = new UserDao();
        try {
            return await userDao.getUser(username, password);
        } catch (error) {
            throw new Error(error)
        }
    }

}