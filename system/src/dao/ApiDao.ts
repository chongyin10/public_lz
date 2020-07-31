import { Api } from '../models/Api';
import QuerySql from '../utils/SqlQuery';

export default class ApiDao extends Api {
    protected querySql = new QuerySql();
    /**
     * 获取所有的接口
     */
    async getApiAll() {
        return await Api.findAll({
            raw: true
        }).then((res) => {
            return res;
        })

    }

    /**
     * 获取所有api信息
     * @param data 
     * @param page
     */
    async getApiList(search: any, page: number) {
        return await this.querySql.queryLimitSql(Api, search, page)
    }

    /**
     * 
     * @param data 
     */
    async addApi(data: any) {
        return await Api.create(data);
    }

    /**
     * 删除
     * @param id 
     */
    async delApi(id: Number) {
        return await Api.destroy({
            where: {
                id: Number(id)
            }
        }).then((res) => {
            return res
        })
    }

    /**
     * 
     * @param id 
     */
    async getApiByIdAndSystem(id: number, system: number) {
        return await Api.findOne({
            where: {
                id,
                system
            }
        }).then(result => {
            return result
        })
    }

    /**
     * 
     * @param id 
     */
    async getApiById(id: number) {
        return await Api.findByPk(id).then(result => {
            return result;
        });
    }

    /**
     * 
     * @param data 
     * @param id 
     */
    async updateApi(data: any, id: number) {
        data.id = id;
        return await Api.upsert(data);
    }
}