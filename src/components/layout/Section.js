import React from 'react';

import classNames from 'classnames';
import css from './styles/Section.module.scss'

export const Section = ({ title, children, button, showFullUnderline, childStyle }) => (
  <div className={css.root}>
    <div className={css.title}>
      <span>{title}</span>
      <div
        className={classNames(css.underline, {
          [css.fullWidth]: showFullUnderline,
        })}
      />
      {button}
    </div>
      <div className={childStyle}>{children}</div>
  </div>
);