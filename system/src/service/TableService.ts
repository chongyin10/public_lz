
import TableDao from '../dao/TableDao';
import { resultUtils } from '../utils/utils';

export default class TableService {
    /**
     * 
     * @param data 
     * @param page 
     */
    async getTableAll(tableName?: any) {
        const tableDao = new TableDao();
        let result: any = [];
        try {
            let resultObj: any = await tableDao.getTableNameAll(tableName);
            if (resultObj && resultObj.length > 0) {
                for (let tableList of resultObj) {
                    for (let table in tableList) {
                        if (table === "TABLE_NAME") {
                            let tt: any = await tableDao.getTableNameStructureAll(tableList[table]);
                            tableList.type = tt;
                        }
                    }
                }
            } else {
                await resultUtils(true, '表结构不存在', { list: resultObj, pageCount: 0 });
            }
            result = await resultUtils(true, '获取表成功', { list: resultObj, pageCount: 0 });
            return result;
        } catch (error) {
            return await resultUtils(false, '获取表列表失败', result)
        }
    }
}