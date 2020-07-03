const dbs = require('./db.json');

export function getDB(env: any) {
    console.log(`@env:${env}`);
    for (let _db in dbs) {
        if (env === _db) {
            console.log(`@连接数据库环境为：${_db}`);
            return dbs[_db]
        } else {
            console.log(`@无法连接数据库, 当前连接数据库环境：${_db}`);
            return []
        }
    }
}




