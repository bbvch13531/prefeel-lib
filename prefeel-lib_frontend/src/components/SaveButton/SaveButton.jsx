import React from 'react';
import styles from './SaveButton.scss';
import SaveIcon from 'static/svg/save-icon';

const SaveButton = ({isOpen}) => {
  const directoryBarClassName = isOpen ? 'directory-bar open' : 'directory-bar';
  return (
    <div className="button-wrapper">
      <SaveIcon />
      <a>Save</a>
    </div>
  );
}

export default SaveButton;