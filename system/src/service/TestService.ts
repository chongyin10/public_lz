import TestDao from '../dao/TestDao';

export default class TestService {
    /**
     * 服务层
     * @param id 
     */
    async getById(id: number) {
        const testDao = new TestDao();
        try {
            return await testDao.getById(id);
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 
     */
    async getByAll() {
        const testDao = new TestDao();
        try {
            return await testDao.getList();
        } catch (error) {
            throw new Error(error)
        }
    }

}