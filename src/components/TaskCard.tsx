import * as React from 'react';
import { css } from 'emotion';
import { Avatar, Card, CardContent, CardHeader, Chip } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { format } from 'date-fns';
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
  paddingTop: 16,
});

export const TaskCard = ({ task }: Props) => {
  return (
    <Card className={cardStyle}>
      <CardHeader
        avatar={
          <Avatar>
            <Description />
          </Avatar>
        }
        title={task.title}
        subheader={`更新日時: ${task.updatedAt && format(task.updatedAt.toDate(), 'yyyy-MM-dd')}`}
      />
      <CardContent>
        {task.content}
        <footer className={footerStyle}>
          {task.labels.map(label => (
            <Chip key={label} label={label} />
          ))}
        </footer>
      </CardContent>
    </Card>
  );
};
