import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Tasks } from './containers/Task/index';
import { paths } from './constants/paths';
import { PageHeader } from './components/PageHeader';

export const App = () => (
  <PageHeader>
    <Switch>
      <Route path={[paths.basePath, paths.tasks.show]} exact>
        <Tasks />
      </Route>
    </Switch>
  </PageHeader>
);
