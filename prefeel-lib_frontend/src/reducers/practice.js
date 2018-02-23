import { Map } from 'immutable';

import {
  DIRECTORY_TOGGLE,
  LINTER_TOGGLE
} from 'actions/practice';

const initialState = Map({
  isOpenDirectoryBar: true,
  isOpenLinterBar: true,
});

const actionsMap = {
  [DIRECTORY_TOGGLE]: (state) => {
    return state.set('isOpenDirectoryBar', !state.isOpenDirectoryBar);
  },
  [LINTER_TOGGLE]: (state) => {
    return state.set('isOpenLinterBar', !state.isOpenLinterBar);
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}