import { Api } from '../models/Api';
import { QueryTypes } from 'sequelize'

export default class ApiDao extends Api {

    /**
     * 原生态sql避免sql注入
     * @param itemid 
     */
    async getApiByItemid(itemid?: number) {
        let sql = 'SELECT a.* FROM api AS a, item AS i WHERE a.itemid=i.id AND a.itemid=?';
        let api = await this.sequelize.query(sql, {
            replacements: [itemid],
            type: QueryTypes.SELECT
        }).then(projects => {
            return projects
        });
        return api;
    };
}