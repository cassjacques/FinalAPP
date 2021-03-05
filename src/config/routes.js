import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import FitsPage from '../pages/FitPages/FitsPage';
import NewFitPage from '../pages/FitPages/NewFitPage';
import EditFitPage from '../pages/FitPages/EditFitPage';
import ShowFitPage from '../pages/FitPages/ShowFitPage';
import SOSsPage from '../pages/SOSPages/SOSsPage';
import NewSOSPage from '../pages/SOSPages/NewSOSPage';
import EditSOSPage from '../pages/SOSPages/EditSOSPage';
import ShowSOSPage from '../pages/SOSPages/ShowSOSPage'

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/fits' component={FitsPage} />
    <Route path='/new-fit' component={NewFitPage} />
    <Route path='/edit-fit/:id' component={EditFitPage} />
    <Route path='/show-fit/:id' component={ShowFitPage} />
    <Route path='/SOSs' component={SOSsPage} />
    <Route path='/new-sos' component={NewSOSPage} />
    <Route path='/edit-sos/:id' component={EditSOSPage} />
    <Route path='/show-sos/:id' component={ShowSOSPage} />

  </Switch>
);

export default routes;