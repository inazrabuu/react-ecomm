import { all, call } from 'redux-saga'

import { fetchCollectionsStart } from './shop/shop.sagas'

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStart)
  ])
}