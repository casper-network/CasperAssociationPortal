import { all } from 'redux-saga/effects';
import { watchDemoData } from './dashboard/dashboard-middleware';
import { watchAuth } from './auth/middlewares';
import { watchOnboard } from './onboard/middlewares';
import { watchAdmin } from './admin/middlewares';

export default function* appMiddleware() {
  yield all([watchDemoData(), watchAuth(), watchOnboard(), watchAdmin()]);
}
