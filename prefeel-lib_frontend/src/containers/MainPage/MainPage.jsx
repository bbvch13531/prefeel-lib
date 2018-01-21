import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './MainPage.scss';
import { getLibraries } from 'actions/main';

import LibraryCard from 'components/LibraryCard';

const mapStateToProps = (state) => {
  return {
    libraries: state.main.get('libraries'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getLibraries: getLibraries,
  }, dispatch);
};

class MainPage extends React.Component {
  componentWillMount(){
    this.props.getLibraries();
  }
  
  render () {
    const { libraries, showLibrary } = this.props;
    console.log(libraries);
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
        <div className="main-body">
          <div className="library-searchbar">
            <label className="library-searchbar-label">
              <input type="text" placeholder="Search library"></input>
            </label>
          </div>
          <div className="library-cards">
            {
              libraries.map(
                ({
                  _id,
                  name,
                  language,
                  description
                }) =>
                <LibraryCard
                  key={_id}
                  libraryName={name}
                  description={description}
                />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
