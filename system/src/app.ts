import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import httpLogger from './config/log4j';

import cookieParser = require('cookie-parser');

import { test_R } from './controller/test';
import { login } from './controller/login';

export const app = express();
app.use(httpLogger);
app.use(cookieParser())

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));

// enable corse for all origins
app.use(async (req, res: any, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "x-total-count");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    await next();
});

/**
 * 做权限拦截器使用
 */
app.all('*', async function (req, res, next) {
    console.log('@cookie值：',req.headers.cookie)
    await next();
})

app.use('/test', test_R);
app.use('/login', login);

console.log(`@运行环境为：${process.env.NODE_ENV}`)

app.use(errorhandler({
    debug: process.env.NODE_ENV !== 'prod',
    log: true,
}));
