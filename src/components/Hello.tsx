import * as React from 'react';
import { Card, CardActions, CardContent, CardHeader, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export const Hello = () => {
  return (
    <Card>
      <CardHeader>Material-UI</CardHeader>
      <CardContent>Task</CardContent>
      <CardActions>
        <Fab color="primary">
          <EditIcon />
        </Fab>
      </CardActions>
    </Card>
  );
};
