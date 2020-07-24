import { combineReducers } from 'redux';

import RTest from '@/page/redux/test';
import RLogin from '@/page/redux/login';
import RCom from '@/page/redux/common';
import RUser from '@/page/redux/user';

const reducers = {
    RTest,
    RLogin,
    RCom,
    RUser
};

export default combineReducers(reducers)