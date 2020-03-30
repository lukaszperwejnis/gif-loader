import React from 'react';
import { createBrowserHistory } from "history";
import {Route, Router, Switch} from "react-router-dom";

import {Gifs} from "./containers/Gifs/Gifs";

const history = createBrowserHistory();

export const Routes = () => {
    return <Router history={history}>
        <Switch>
            <Route path="/">
                <Gifs/>
            </Route>
        </Switch>
    </Router>;
};
