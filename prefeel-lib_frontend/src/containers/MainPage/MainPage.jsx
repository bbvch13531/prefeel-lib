import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import styles from './MainPage.scss';

const mapStateToProps = (state) => {
  return {
    library: state.library,
  }
};
const mapDispatchToProps = (dispatch) => ({

});

class MainPage extends React.Component {

  constructor(){
    super();
    this.state={
      libraries:[]
    }
  }

  componentDidMount(){
    let resdata;  
    Axios.get('/api/v1.0/Library')
      .then(async (response) => {
        resdata=response.data.libraries;
        this.setState({
          libraries:resdata
        });
      })
      .catch((error) =>{
        console.log("error: "+error);
    })
  }

  render () {
    return (
      <div className="main-page">
        <div className="main-header">
          <h1>
            prefeel-lib
          </h1>
          <p>
            A web application for practicing several libraries
          </p>
        </div>
        <div className="library-searchbar">
          <label className="library-searchbar-label">
            <input type="text" placeholder="Search library"></input>
          </label>
        </div>
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
