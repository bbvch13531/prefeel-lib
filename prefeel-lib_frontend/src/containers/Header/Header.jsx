import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Header.scss';

import BrandLogo from 'components/BrandLogo';

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
      <header id="header">
        <BrandLogo
          brandName="prefeel-lib"
        />
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
