import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'static/img/logo.png';
import styles from './BrandLogo.scss';

const BrandLogo = ({brandName}) => {
  return (
    <div className="logo-wrapper">
      <Link className="logo" to="/">
        <img src={logo} alt="prefeel-lib" className="logo-image" />
        <span className="logo-text">{brandName}</span>
      </Link>
    </div>
  );
}

export default BrandLogo;