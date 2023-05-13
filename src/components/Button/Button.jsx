import React from 'react';
import css from '../styles.module.css';

const Button = ({ children, type = 'button', onClick = null }) => {
  return (
    <button type={type} onClick={onClick} className={css.Button}>
      {children}
    </button>
  );
};

export default Button;
