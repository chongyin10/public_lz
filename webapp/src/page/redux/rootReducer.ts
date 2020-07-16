import { combineReducers } from 'redux';

import RTest from '@/page/redux/test';
import RLogin from '@/page/redux/login';
import RCom from '@/page/redux/common';

const reducers = {
    RTest,
    RLogin,
    RCom
};

export default combineReducers(reducers)