import { Router } from 'express';
import TestService from '../service/TestService';

export const tests = Router();
let testService = new TestService();

tests.get(':id', async (req, res, next) => {
	try {
		res.json(await testService.getById(req.params['id']));
	} catch (e) {
		next(e);
	}
});

tests.get('/getTest', async (req, res, next) => {
	console.log("----------controller------------")
	try {
		res.json(await testService.getByAll());
	} catch (e) {
		next(e);
	}
});


