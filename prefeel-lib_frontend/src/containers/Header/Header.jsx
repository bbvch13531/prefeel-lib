import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Header.scss';

import logo from 'static/img/logo.png';

const mapStateToProps = (state) => {
  return {
    library: state.library,
  }
};

const mapDispatchToProps = (dispatch) => ({

});

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className="logo-wrapper">
          <Link className="logo" to="/">
            <img src={logo} alt="prefeel-lib" className="logo-image" />
            <span className="logo-text">prefeel-lib</span>
          </Link>
        </div>
        <nav>
        </nav>
      </header>
    );
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  (dispatch) => ({

  })
)(Header);
