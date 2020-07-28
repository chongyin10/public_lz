import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from '@/page/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import Main from '@/page';
import { ConfigProvider } from 'antd';
import './index.scss';
import zh_CN from 'antd/lib/locale-provider/zh_CN';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConfigProvider locale={zh_CN}>
                <Main />
            </ConfigProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
