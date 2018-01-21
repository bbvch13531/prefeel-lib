import React from 'react';
import { connect } from 'react-redux';

import DirectoryBar from 'components/DirectoryBar';
import LinterBar from 'components/LinterBar';

const mapStateToProps = state => {
  return {
    isOpenDirectoryBar: state.isOpenDirectoryBar,
    isOpenLinterBar: state.isOpenLinterBar,
  }
};

const mapDispatchToProps = dispatch => {

};

class PracticePage extends React.Component {
  render () {
    return (
      <div className="practice-page">
        <DirectoryBar
          isOpen={this.props.isOpenDirectoryBar}
        />
        <LinterBar
          isOpen={this.props.isOpenLinterBar}
        />
        <div className="practice-section">
        </div>
      </div>
    );
  }
}

export default connect()(PracticePage);
