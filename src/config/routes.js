import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FitsPage from '../pages/FitsPage';
import NewFitPage from '../pages/NewFitPage';
import EditFitPage from '../pages/EditFitPage';

const routes = (
    <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/fits' component={FitsPage} />
          <Route path='/new-fit' component={NewFitPage} />
          <Route path='/edit-fit/:id' component={EditFitPage} />
        </Switch>
);

export default routes;