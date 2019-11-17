import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Tasks } from './containers/Task/index';
import { paths } from './constants/paths';

export const App = () => (
  <Switch>
    <Route path={[paths.basePath, paths.tasks.show]} component={Tasks} exact />
  </Switch>
);
