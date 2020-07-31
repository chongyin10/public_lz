import { SystemTable } from '../models/SystemTable';
import StringBuffer from '../utils/StringBuffer';
import { getDB } from '../config/db_config';

const _db = getDB(process.env.NODE_ENV);

export default class TableDao extends SystemTable {
    /**
     * 表结构
     * @param tableName 表名称
     */
    async getTableNameStructureAll(tableName: string) {
        let sql = new StringBuffer('SELECT s.COLUMN_NAME, s.COLUMN_TYPE, s.COLUMN_COMMENT ');
        sql.append(' from INFORMATION_SCHEMA.COLUMNS AS s ');
        sql.append(` where s.table_schema = '${_db['database']}' `);
        sql.append(` and s.TABLE_NAME= '${tableName}' `)
        sql.append(' and s.TABLE_NAME NOT IN ("information_schema.columns") ')
        sql.append(' ORDER BY s.TABLE_NAME ASC ')
        return await SystemTable.sequelize?.query(sql.toString()).then(result => {
            return result[0];
        });
    }

    /**
     * 获取所有表名称
     * @param tableName 表
     */
    async getTableNameAll(tableName?: any) {
        let sql = new StringBuffer('SELECT  s.TABLE_NAME ');
        sql.append(' from INFORMATION_SCHEMA.COLUMNS AS s ');
        sql.append(` where s.table_schema = '${_db['database']}' and s.TABLE_NAME NOT IN ("information_schema.columns") `);
        if (tableName) {
            for (let tab in tableName) {
                sql.append(` and s.TABLE_NAME='${tableName[tab]}'`);
            }
        }
        sql.append(' group by s.TABLE_NAME  ')
        return await SystemTable.sequelize?.query(sql.toString()).then(result => {
            return result[0];
        });
    }
}