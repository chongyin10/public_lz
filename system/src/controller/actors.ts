import { Router } from 'express';
import { Actor } from '../models/Actor';

export const actors = Router();

actors.post('/', async (req, res, next) => {
	try {
		const actor = await Actor.create(req.body);
		res.status(201).json(actor);
	} catch (e) {
		next(e);
	}
});


actors.get('', async (req, res, next) => {
	try {
		res.json(Actor.getList());
	} catch (e) {
		next(e);
	}
});

actors.get('/:id', async (req, res, next) => {
	try {
		const actor = await Actor.scope(req.query['scope']).findByPk(req.params['id']);
		res.json(actor);
	} catch (e) {
		next(e);
	}
});

actors.put('/:id', async (req, res, next) => {
	try {
		await Actor.update(req.body, { where: { id: req.params['id'] } });
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});
