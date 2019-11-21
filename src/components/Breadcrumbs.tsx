import * as React from 'react';
import ClassNames from 'classnames';
import { Breadcrumbs as BreadcrumbsOrigin, Typography } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

type Props = {
  className?: string;
  linkItems: { name: string; to: string }[];
  current: string;
};

const baseStyle = css({
  display: 'inline-flex',
});

const linkStyle = css({
  color: '#808080',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#696969',
    textDecoration: 'underline',
  },
});

export const Breadcrumbs = ({ className, linkItems, current }: Props) => (
  <BreadcrumbsOrigin className={ClassNames(baseStyle, className)} separator={<NavigateNext />}>
    {linkItems.map(item => (
      <Link key={item.name} className={linkStyle} to={item.to}>
        {item.name}
      </Link>
    ))}
    <Typography color="textPrimary">{current}</Typography>
  </BreadcrumbsOrigin>
);
