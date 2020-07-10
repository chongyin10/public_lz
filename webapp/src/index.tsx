import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '@/page/components/App';
import store from '@/page/redux/store';
import { BrowserRouter as Router, Switch, withRouter, Route } from "react-router-dom";


import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router basename='/'>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
