import React from 'react';
import { connect } from 'react-redux';
import styles from './MainPage.scss';

const mapStateToProps = (state) => {
  return {
    library: state.library,
  }
};

const mapDispatchToProps = (dispatch) => ({

});

class MainPage extends React.Component {
  render () {
    return (
      <div>
        MainPage
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  (dispatch) => ({

  })
)(MainPage);
