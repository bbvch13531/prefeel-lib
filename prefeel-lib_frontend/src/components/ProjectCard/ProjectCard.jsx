import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.scss';

const ProjectCard = ({ProjectName, description, click}) => {
  const ProjectCardClassName = 'Project-card ' + ProjectName; 
  const ProjectImgURL = 'static/img/projects/' + ProjectName + '.png';

  return (
    <Link to={`/Project/${ProjectName}`} className="Project-card-wrapper">
      <div className={ProjectCardClassName}>
        <div className="Project-image">
          <img src={ProjectImgURL} />
        </div>
        <div className="Project-info">
          <div className="Project-name">{ProjectName}</div>
          <div className="Project-description">{description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;