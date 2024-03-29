import { all, takeLatest, call, put } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* SignIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    console.tron.error('Falha na autenticação!');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
