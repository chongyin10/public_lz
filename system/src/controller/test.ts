import { Router } from 'express';
import TestService from '../service/TestService';
import * as API from '../config/api';

export const test_R = Router();
let testService = new TestService();

test_R.get(API.getTestList, async (req, res, next) => {
	try {
		res.json(await testService.getTestList());
	} catch (e) {
		next(e);
	}
});
