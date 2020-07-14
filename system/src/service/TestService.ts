import TestDao from '../dao/TestDao';

export default class TestService {

    async getTestList() {
        const testDao = new TestDao();
        try {
            return await testDao.getTestList();
        } catch (error) {
            throw new Error(error)
        }
    }

}