import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Sidebar.scss';
import { toggleDirectoryBar, toggleLinterBar } from 'actions/sidebar';

import DirectoryBarToggleButton from 'components/DirectoryBarToggleButton';
import LinterBarToggleButton from 'components/LinterBarToggleButton';
import SaveButton from 'components/SaveButton';

const mapStateToProps = (state) => {
  return {
    isOpenDirectoryBar: state.sidebar.get('isOpenDirectoryBar'),
    isOpenLinterBar: state.sidebar.get('isOpenLinterBar'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleDirectoryBar: toggleDirectoryBar,
    toggleLinterBar: toggleLinterBar,
  }, dispatch);
};

class Sidebar extends React.Component {
  render () {
    const { isOpenDirectoryBar, isOpenLinterBar, toggleDirectoryBar, toggleLinterBar } = this.props;

    return (
      <aside className="sidebar">
        <DirectoryBarToggleButton
          isOpen={isOpenDirectoryBar}
          toggleBar={toggleDirectoryBar}
        />
        <LinterBarToggleButton
          isOpen={isOpenLinterBar}
          toggleBar={toggleLinterBar}
        />
        <SaveButton />
      </aside>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
