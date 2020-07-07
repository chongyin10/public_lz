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
}

export default QuerySql