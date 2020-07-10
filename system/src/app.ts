import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import { tests } from './controller/test';
import { items } from './controller/item';
import { users } from './controller/users';
import { apis } from './controller/api';

export const app = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));

// enable corse for all origins
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "x-total-count");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

    next();
});

app.use('/item', items)
app.use('/tests', tests);
app.use('/users', users)
app.use('/apis', apis)


console.log(`@运行环境为：${process.env.NODE_ENV}`)

app.use(errorhandler({
    debug: process.env.NODE_ENV !== 'prod',
    log: true,
}));
