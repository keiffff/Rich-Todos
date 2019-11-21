import * as React from 'react';
import { css } from 'emotion';
import { CircularProgress, Modal } from '@material-ui/core';

type Props = {
  loading: boolean;
  spinnerSize?: number;
  spinnerColor?: 'primary' | 'secondary' | 'inherit';
};

const modalStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
});

const circularProgressStyle = css({
  outline: 'none',
});

export const LoadingScreen = ({ loading, spinnerSize = 60, spinnerColor = 'primary' }: Props) => (
  <Modal className={modalStyle} open={loading}>
    <CircularProgress className={circularProgressStyle} size={spinnerSize} color={spinnerColor} />
  </Modal>
);
