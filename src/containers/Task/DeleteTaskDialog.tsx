import * as React from 'react';
import { css } from 'emotion';
import {
  Dialog,
  DialogContent,
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  ListSubheader,
} from '@material-ui/core';
import { TaskContext } from '../../contexts/task';
import { TaskStatus } from '../../models/models';
import { taskStatusText } from '../../constants/constants';

type Props = {
  open: boolean;
  onClose: () => void;
  statuses: TaskStatus[];
};

const dialogStyle = css({
  '.MuiDialog-paper': {
    width: '50%',
    height: '70%',
  },
});

const formContainerStyle = css({
  padding: 30,
  margin: '0 auto',
});

const labelsSelectStyle = css({
  width: '100%',
});

export const DeleteTaskDialogContainer = ({ open, onClose, statuses }: Props) => {
  const { taskStore } = React.useContext(TaskContext);

  return (
    <Dialog className={dialogStyle} open={open} onClose={onClose} maxWidth="lg">
      <DialogContent>
        <div className={formContainerStyle}>
          <form>
            <InputLabel>一括削除するタスクを選択</InputLabel>
            <Select
              multiple
              input={<Input />}
              className={labelsSelectStyle}
              value={[]}
              renderValue={selected => (selected as string[]).join(',')}
            >
              {statuses.map(status => (
                <div key={status}>
                  <ListSubheader disableSticky color="primary">
                    {taskStatusText[status]}
                  </ListSubheader>
                  {taskStore.tasks
                    .filter(task => task.status === status)
                    .map(task => (
                      <MenuItem key={task.id} value={task.id}>
                        <Checkbox />
                        <ListItemText primary={task.title} />
                      </MenuItem>
                    ))}
                </div>
              ))}
            </Select>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
