import axios from 'axios';
import data from '../../config.json';

export const PROJECTS_GET = 'PROJECTS_GET';

export const getLibraries = (project) => {
  return dispatch => {
    axios.get(data.URL + 'tic-tac-toe')
      .then(response => {
        dispatch({
          type: LIBRARIES_GET,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  };
}
