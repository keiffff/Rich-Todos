import * as React from 'react';

type Props = {
  error: boolean;
  title: string;
  content: string;
};

export const useTaskFormError = ({ error, title, content }: Props) => {
  const titleError = React.useMemo(() => error && !title.trim(), [error, title]);
  const contentError = React.useMemo(() => error && !content.trim(), [error, content]);
  const errorCondition = React.useMemo(() => !title.trim() || !content.trim(), [title, content]);

  return { titleError, contentError, errorCondition };
};
