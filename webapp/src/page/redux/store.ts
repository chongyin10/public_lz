// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'

// import rootReducer from './rootReducer'

// const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for 

import rootReducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: any = createStore(persistedReducer, compose(applyMiddleware(thunk)))

export const persistor = persistStore(store)
export default store
