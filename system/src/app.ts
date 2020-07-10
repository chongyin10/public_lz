import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import { movies } from './controller/movies';
import { actors } from './controller/actors';
import { genres } from './controller/genre';
import { tests } from './controller/test';
import { items } from './controller/item';
import { users } from './controller/users';

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
app.use('/movies', movies);
app.use('/actors', actors);
app.use('/genres', genres);
app.use('/tests', tests);
app.use('/users', users)


console.log(`@运行环境为：${process.env.NODE_ENV}`)

app.use(errorhandler({
    debug: process.env.NODE_ENV !== 'prod',
    log: true,
}));
