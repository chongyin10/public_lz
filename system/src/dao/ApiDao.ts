import { Api } from '../models/Api';

export default class ApiDao extends Api {

    /**
     * 获取所有的接口
     */
    async getApiAll() {
        let module = await Api.findAll({
            raw: true
        });
        return module;
    }
}