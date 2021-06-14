import React from 'react';
import Home from '../pages/Home';
import Page02 from '../pages/Page02';
import Page03 from '../pages/Page03';
import SearchResult from '../pages/SearchResult';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/page02" exact={true} component={Page02} />
                    <Route path="/page03" exact={true} component={Page03} />
                    <Route path="/search-result" exact={true} component={SearchResult} />
                </Switch>
            </BrowserRouter>
        </div>

    );
}
export default Routes;