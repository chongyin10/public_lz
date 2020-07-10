import { QueryTypes } from 'sequelize'
import StringBuffer from './StringBuffer';

/**
 * 纯sql语句写法: 脱离Model
 */
class QuerySql {

    protected tabname: any;
    protected self: any;

    constructor(tabname: any, self: any) {
        this.tabname = tabname;
        this.self = self;
    }

    /**
     * 纯sql语句带有where查询
     * @param whereParam 
     */
    querySqlAll(whereParam?: any): any {
        let sqlStr = ` select * from ${this.tabname} `;
        var whereBuffer = new StringBuffer(` where 1 = 1`);
        if (whereParam) {
            for (let param in whereParam) {
                whereBuffer.append(` and ${param}=:${param}`);
            }
        }
        let obj = this.self.sequelize.query(sqlStr + whereBuffer.toString(),
            {
                replacements: whereParam,
                type: QueryTypes.SELECT
            }
        ).then(projects => {
            return projects
        });
        return obj
    }

    /**
     * 纯sql语句查询: 此方法存在sql注入
     * @param sql 
     */
    querySql(sql?: string): any {
        let obj = this.self.sequelize.query(sql).then(projects => {
            return projects
        });
        return obj
    }
}

export default QuerySql