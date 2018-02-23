import React from 'react';
import styles from './DirectoryBarToggleButton.scss';
import DirectoryIcon from 'static/svg/directory-icon';

const DirectoryBarToggleButton = ({isOpen, toggleBar}) => {
  const className = isOpen ? 'button-wrapper active' : 'button-wrapper';
  return (
    <div className={className}>
      <DirectoryIcon onClick={toggleBar} />
      <a>Directory</a>
    </div>
  );
}

export default DirectoryBarToggleButton;