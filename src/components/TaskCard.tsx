import * as React from 'react';
import { css } from 'emotion';
import { Avatar, Card, CardActions, CardContent, CardHeader, Chip, Fab } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { Task } from '../models/models';

type Props = {
  task: Task;
};

const cardStyle = css({
  cursor: 'pointer',
  '&:hover': {
    transition: 'background 0.5s',
    background: '#ededed',
  },
});

const footerStyle = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const TaskCard = ({ task }: Props) => {
  return (
    <Card className={cardStyle}>
      <CardHeader
        avatar={
          <Avatar>
            <span role="img" aria-label="task">
              📌
            </span>
          </Avatar>
        }
        title={task.title}
        subheader="Add ServerTimeStamp here"
      />
      <CardContent>{task.content}</CardContent>
      <CardActions>
        <footer className={footerStyle}>
          <div>
            {task.labels.map(label => (
              <Chip key={label} label={label} />
            ))}
          </div>
          <Fab color="primary">
            <Edit />
          </Fab>
        </footer>
      </CardActions>
    </Card>
  );
};
