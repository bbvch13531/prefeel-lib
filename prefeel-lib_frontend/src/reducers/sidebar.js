import { Map } from 'immutable';

import {
  DIRECTORY_BAR_TOGGLE,
  LINTER_BAR_TOGGLE
} from 'actions/sidebar';

const initialState = Map({
  isOpenDirectoryBar: false,
  isOpenLinterBar: false,
});

const actionsMap = {
  [DIRECTORY_BAR_TOGGLE]: (state) => {
    return state
      .set('isOpenLinterBar', false)
      .set('isOpenDirectoryBar', !state.get('isOpenDirectoryBar'));
  },
  [LINTER_BAR_TOGGLE]: (state) => {
    return state
      .set('isOpenDirectoryBar', false)
      .set('isOpenLinterBar', !state.get('isOpenLinterBar'));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}