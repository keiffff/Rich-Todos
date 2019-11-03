import * as React from 'react';
import { css } from 'emotion';
import { Avatar, Card, CardActions, CardContent, CardHeader, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const cardStyle = css({
  width: 296,
});

const avatarStyle = css({
  background: 'black',
});

const buttonContainerStyle = css({
  marginLeft: 'auto',
});

export const TaskCard = () => {
  return (
    <Card className={cardStyle}>
      <CardHeader
        avatar={(
          <Avatar className={avatarStyle}>
            <span role="img" aria-label="task">
              📌
            </span>
          </Avatar>
        )}
        title="task"
        subheader="2019/11/3"
      />
      <CardContent>Task</CardContent>
      <CardActions>
        <div className={buttonContainerStyle}>
          <Fab color="primary">
            <EditIcon />
          </Fab>
        </div>
      </CardActions>
    </Card>
  );
};
