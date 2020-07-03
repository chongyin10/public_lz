import { combineReducers } from 'redux';

// import book from './book';
import RSys from './system';
import LMap from './maps';
import RApp from './app';
import RTest from './test';

const reducers = {
    RSys, LMap, RApp, RTest
};

export default combineReducers(reducers)