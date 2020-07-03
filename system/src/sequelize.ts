import { Sequelize } from 'sequelize-typescript';
import { getDB } from './config/db_config';

const _db = getDB(process.env.NODE_ENV);

const sequelize = new Sequelize({
    database: _db.database,
    username: _db.username,
    password: _db.password,
    host: _db.host,
    port: _db.port,
    dialect: _db.dialect,
    // operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // 时区设置
    dialectOptions: {
        useUTC: false // for reading from database
    },
    timezone: '+8:00', // for writing to database
    models: [__dirname + '/models']
});

export default sequelize
