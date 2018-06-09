import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer, { SIGN_OUT } from 'modules/auth';
import userReducer from 'modules/user';

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
