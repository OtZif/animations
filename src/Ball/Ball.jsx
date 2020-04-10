import React from 'react';
import cx from 'classnames';
import style from './Ball.module.scss';
import 'animate.css/animate.css';

const Ball = ({ animation, color }) => {
  return (
    <div
      className={cx(style.ball, {
        animated: true,
        [animation]: true,
      })}
      style={{ backgroundColor: color }}
    />
  );
};

export default Ball;
