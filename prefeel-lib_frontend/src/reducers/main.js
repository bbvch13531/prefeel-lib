import { Map, List } from 'immutable';

import {
  LIBRARIES_GET,
} from 'actions/main';

const initialState = Map({
  libraries: List(),
});

const actionsMap = {
  [LIBRARIES_GET]: (state, action) => {
    return state.set('libraries', action.payload.libraries);
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}