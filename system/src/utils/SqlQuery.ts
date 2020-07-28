import { QueryTypes } from 'sequelize'
import StringBuffer from './StringBuffer';

/**
 * 纯sql语句写法: 脱离Model
 */
export default class QuerySql {

    protected tabname: any; // 表名
    protected self: any; // 当前指向对象
    protected pageNumber?: Number = 10;  // 当前分页条数, 默认 10

    /**
     * 
     * @param self 指向本身 this
     * @param tabname 表名
     * @param pageNumber 最大分页数
     */
    constructor(self: any, tabname: any, pageNumber?: Number) {
        this.tabname = tabname;
        this.self = self;
        this.pageNumber = pageNumber ? pageNumber : this.pageNumber;
    }

    /**
     * 纯sql语句带有where查询
     * @param whereParam 
     */
    querySqlAll(whereParam?: any, minLimit?: Number): any {
        let sqlStr = ` select * from ${this.tabname} `;
        var whereBuffer = new StringBuffer(` where 1 = 1`);
        if (whereParam) {
            for (let param in whereParam) {
                if (whereParam[param] != '' && whereParam[param].trim() != '') {
                    whereBuffer.append(` and ${param}=:${param}`);
                }
            }
        }
        if (minLimit) {
            // SELECT * from vote_record_memory LIMIT (n-1)*20,20; 分页计算公式 n:当前页码，20，当前要显示多少记录数
            let _minLimit = Number(Number(minLimit) * Number(this.pageNumber));
            whereBuffer.append(` LIMIT ${_minLimit},${Number(this.pageNumber)}`);
        } else if (minLimit == 0) {
            whereBuffer.append(` LIMIT ${minLimit},${Number(this.pageNumber)}`);
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