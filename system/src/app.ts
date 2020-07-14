import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';

import { test_R } from './controller/test';

export const app = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));

// enable corse for all origins
app.use(async (req, res, next) => {
    res.set('Access-Control-Allow-Credentials', "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "x-total-count");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded")
    await next();
});

app.use('/test', test_R);

console.log(`@运行环境为：${process.env.NODE_ENV}`)

app.use(errorhandler({
    debug: process.env.NODE_ENV !== 'prod',
    log: true,
}));
