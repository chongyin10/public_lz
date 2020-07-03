import React from 'react';
import { Route, Switch } from 'react-router-dom';

import views from '@/page/views';

/**
 * 
 * @param param0 
 */
const exeRouteHtml = ({ registerList }: any) => {
    let routeHTML: any[] = [];
    let routeSwitchHTML: any[] = [];
    for (let i = 0; i < registerList.length; i++) {
        let _url = registerList[i]["url"];
        if (_url && _url != null) {
            let componentView = resolutionViews(registerList[i]["register"]);
            if (componentView) {
                let _urlArgs = _url.toString().split();
                _urlArgs.length === 1 ?
                    routeHTML.push(<Route key={i} exact path={registerList[i]["url"]} component={componentView} />)
                    :
                    routeSwitchHTML.push(<Route key={i} path={registerList[i]["url"]} component={componentView} />)
            }
        }
    }
    let _r = [<Switch key="_r">{routeHTML}<Route path={'/'} ><Switch>{routeSwitchHTML}</Switch></Route></Switch>];
    return _r;
}

/**
 * 视图匹配器
 */
function resolutionViews(register: string): any {
    for (let i = 0; i < views.length; i++) {
        if (views[i]["register"] == register) {
            return views[i]["Component"]
        }
    }
}

const Root = (props: any) => (
    <Switch>
        {exeRouteHtml(props)}
    </Switch>
)

export default Root;
