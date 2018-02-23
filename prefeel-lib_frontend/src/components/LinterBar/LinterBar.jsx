import React from 'react';
import styles from './LinterBar.scss';

const LinterBar = ({isOpen}) => {
  const linterBarClassName = isOpen ? 'linter-bar open' : 'linter-bar';
  return (
    <div className={linterBarClassName}>
      LinterBar
    </div>
  );
}

export default LinterBar;