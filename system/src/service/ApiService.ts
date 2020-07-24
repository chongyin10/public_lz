import ApiDao from '../dao/ApiDao';

export default class ApiService {

    /**
     * 
     */
    async getApiAll() {
        const apiDao = new ApiDao();
        try {
            return await apiDao.getApiAll();
        } catch (error) {
            throw new Error(error)
        }
    }

}