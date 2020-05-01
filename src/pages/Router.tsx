import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

const Experiments = lazy(() => import('./1051'));

export default () => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Route exact path='/' component={Experiments} />
        </Switch>
    </Suspense>
);
