import { takeLatest } from 'redux-saga/effects';

import { SIGN_OUT } from '../types';
import { clearLocalStorage } from 'config/localStorage';

function signOut() {
  clearLocalStorage();
}

function* signOutWatcher() {
  yield takeLatest(SIGN_OUT, signOut);
}

export default signOutWatcher;
