import ApiDao from '../dao/ApiDao';

export default class ApiService {

    /**
     * 
     * @param username 用户名称
     * @param password 用户密码
     */
    async getApiByItemid(itemid?: number) {
        const apiDao = new ApiDao();
        try {
            return await apiDao.getApiByItemid(itemid);
        } catch (error) {
            throw new Error(error)
        }
    }

}