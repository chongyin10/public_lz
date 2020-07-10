import { Router } from 'express';
import TestService from '../service/TestService';
import * as API from '../config/apis';

export const tests = Router();
let testService = new TestService();

tests.get(API._id, async (req, res, next) => {
	try {
		res.json(await testService.getById(req.params['id']));
	} catch (e) {
		next(e);
	}
});

tests.get(API.getTest, async (req, res, next) => {
	try {
		res.json(await testService.getByAll());
	} catch (e) {
		next(e);
	}
});


