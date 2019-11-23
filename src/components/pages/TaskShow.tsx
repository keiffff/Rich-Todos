import * as React from 'react';
import { css } from 'emotion';
import ClassNames from 'classnames';
import { LoadingScreen } from '../LoadingScreen';
import { TaskStatus } from '../../models/models';
import { TaskForm } from '../TaskForm';
import { Breadcrumbs } from '../Breadcrumbs';
import { taskLabelTexts } from '../../constants/constants';
import { paths } from '../../constants/paths';

type Props = {
  title: string;
  content: string;
  status: TaskStatus;
  labels: string[];
  onChangeTitle: (value: string) => void;
  onChangeContent: (value: string) => void;
  onChangeStatus: (value: TaskStatus) => void;
  onChangeLabels: (value: string[]) => void;
  loading: boolean;
};

const baseStyle = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 40,
});

const offsetStyle = css({
  paddingTop: 72,
});

const breadcrumbsContainerStyle = css({
  margin: '16px 0 0 32px',
});

const formContainerStyle = css({
  width: '70%',
  padding: `40px 64px 64px`,
  marginLeft: 20,
  border: '1px solid #d3d3d3',
  borderRadius: 8,
});

const linkItems = [{ name: 'Home', to: paths.basePath }];

export const TaskShow = ({
  loading,
  title,
  content,
  status,
  labels,
  onChangeTitle,
  onChangeContent,
  onChangeStatus,
  onChangeLabels,
}: Props) => {
  return (
    <>
      <div className={ClassNames(offsetStyle)}>
        <div className={breadcrumbsContainerStyle}>
          <Breadcrumbs linkItems={linkItems} current="タスクを編集" />
        </div>
        <div className={baseStyle}>
          <div className={formContainerStyle}>
            <TaskForm
              title={title}
              content={content}
              status={status}
              labels={labels}
              labelTexts={taskLabelTexts}
              onChangeTitle={onChangeTitle}
              onChangeContent={onChangeContent}
              onChangeStatus={onChangeStatus}
              onChangeLabels={onChangeLabels}
            />
          </div>
        </div>
      </div>
      <LoadingScreen loading={loading} />
    </>
  );
};
