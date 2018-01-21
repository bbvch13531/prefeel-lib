import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LibraryCard.scss';

const LibraryCard = ({libraryName, description, click}) => {
  const libraryCardClassName = 'library-card ' + libraryName; 
  const libraryImgURL = 'static/img/libraries/' + libraryName + '.png';

  return (
    <Link to={`/library/${libraryName}`} className="library-card-wrapper">
      <div className={libraryCardClassName}>
        <div className="library-image">
          <img src={libraryImgURL} />
        </div>
        <div className="library-info">
          <div className="library-name">{libraryName}</div>
          <div className="library-description">{description}</div>
        </div>
      </div>
    </Link>
  );
}

export default LibraryCard;