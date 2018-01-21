import React from 'react';

const LinterBar = ({isOpen}) => {
  const linterBarClassName = isOpen ? 'linter-bar open' : 'linter-bar';
  return (
    <div className={linterBarClassName}>

    </div>
  );
}

export default LinterBar;