import axios from 'axios';
const URL = '/api/v1.0/';

export const LIBRARIES_GET = 'LIBRARIES_GET';

export const getLibraries = () => {
  return dispatch => {
    axios.get(URL + 'Library')
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