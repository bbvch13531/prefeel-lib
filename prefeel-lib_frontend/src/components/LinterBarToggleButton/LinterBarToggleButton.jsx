import React from 'react';
import styles from './LinterBarToggleButton.scss';
import LinterIcon from 'static/svg/linter-icon';

const LinterBarToggleButton = ({isOpen, toggleBar}) => {
  const className = isOpen ? 'button-wrapper active' : 'button-wrapper';

  return (
    <div className={className}>
      <LinterIcon onClick={toggleBar} />
      <a>Linter</a>
    </div>
  );
}

export default LinterBarToggleButton;