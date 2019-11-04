import * as React from 'react';
import { css } from 'emotion';
import { Avatar, Card, CardActions, CardContent, CardHeader, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Task } from '../models/models';

type Props = {
  task: Task;
};

const cardStyle = css({
  width: 296,
});

const avatarStyle = css({
  background: 'black',
});

const buttonContainerStyle = css({
  marginLeft: 'auto',
});

export const TaskCard = ({ task }: Props) => {
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
        title={task.title}
        subheader="Add ServerTimeStamp here"
      />
      <CardContent>{task.content}</CardContent>
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
