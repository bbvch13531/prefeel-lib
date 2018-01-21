import React from 'react';

const DirectoryBar = ({isOpen}) => {
  const directoryBarClassName = isOpen ? 'directory-bar open' : 'directory-bar';
  return (
    <div className={directoryBarClassName}>

    </div>
  );
}

export default DirectoryBar;