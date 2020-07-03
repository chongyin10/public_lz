import { Router } from 'express';
import { Genre } from '../models/Genre';

export const genres = Router();

genres.post('/', async (req, res, next) => {
    try {
        const actor = await Genre.create(req.body);
        res.status(201).json(actor);
    } catch (e) {
        next(e);
    }
});


genres.get('', async (req, res, next) => {
    try {
        res.json(await Genre.scope(req.query['scope']).findAll());
    } catch (e) {
        next(e);
    }
});

genres.get('/:id', async (req, res, next) => {
    try {
        const actor = await Genre.scope(req.query['scope']).findByPk(req.params['id']);
        res.json(actor);
    } catch (e) {
        next(e);
    }
});

genres.put('/:id', async (req, res, next) => {
    try {
        await Genre.update(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});
