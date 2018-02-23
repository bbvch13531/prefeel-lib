import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './PracticePage.scss';
import { toggleDirectory, toggleLinter } from 'actions/practice';

import Sidebar from 'containers/Sidebar';
import DirectoryBar from 'components/DirectoryBar';
import LinterBar from 'components/LinterBar';

const mapStateToProps = (state) => {
  return {
    isOpenDirectoryBar: state.sidebar.get('isOpenDirectoryBar'),
    isOpenLinterBar: state.sidebar.get('isOpenLinterBar'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleDirectory: toggleDirectory,
    toggleLinter: toggleLinter,
  }, dispatch);
};

const isBarOpen = () => {
  const { isOpenDirectoryBar, isOpenLinterBar } = this.props;

  if (isOpenDirectoryBar || isOpenLinterBar === true) return true;
  
  return false;
}

class PracticePage extends React.Component {
  constructor () {
    super();
  }
  render () {
    const { isOpenDirectoryBar, isOpenLinterBar } = this.props;
    return (
      <div className="practice-page">
        <Sidebar />
        <DirectoryBar
          isOpen={isOpenDirectoryBar}
        />
        <LinterBar
          isOpen={isOpenLinterBar}
        />
        <div className="practice-section">
          practice section
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticePage);
