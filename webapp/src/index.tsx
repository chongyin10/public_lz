import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from '@/page/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import Main from '@/page';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Main />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
