import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '@/page/components/login/Login'

export default function loginRouter() {
    return (<Switch key='model'>
        <Route key='settings' path='/login' component={Login}></Route>
    </Switch>)
}
