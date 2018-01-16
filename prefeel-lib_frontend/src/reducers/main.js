import { Map } from 'immutable';

import {
  LIBRARY_SHOW,
} from 'actions/main';

const initialState = Map({
  library: null,
});

const actionsMap = {
  [LIBRARY_SHOW]: (state, action) => {
    return state.set('library', action.data);
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}