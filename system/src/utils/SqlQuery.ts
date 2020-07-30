/**
 * 纯sql语句写法: 脱离Model
 */
export default class QuerySql {

    public pageNumber: number = 10;
    /**
     * 分页查询语句
     * @param search 条件
     * @param page 当前页码
     */
    async queryLimitSql(T, search: string, page: number) {
        return await T.findAndCountAll({
            offset: (page - 1) * Number(this.pageNumber),
            limit: Number(this.pageNumber),
            order: [['id', 'ASC']],
            where: search
        }).then(res => {
            let result: any = {};
            result.data = res.rows;
            result.total = res.count;
            return { pageCount: res.count, list: res.rows };
        });
    }
}