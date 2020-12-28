import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // as vezes o TypeScript da um erro

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {

    // switch garante que apenas uma rota eh chamada as msm tempo
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;