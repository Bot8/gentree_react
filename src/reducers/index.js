import { combineReducers } from 'redux';

import { personDetailReducer } from 'reducers/personDetail';
import { treeReducer } from 'reducers/tree';

export const rootReducer = combineReducers({
  tree: treeReducer,
  personDetail: personDetailReducer,
});