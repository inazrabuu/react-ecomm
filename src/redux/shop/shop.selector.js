import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = (state) => { return state.shop }

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => { return shop.collections }
)

export const selectShopCollection = memoize((collectionUrlParam) => {
  return createSelector(
    [selectShopCollections],
    (collections) => {
      return collections.find((collection) => { return collection.id === COLLECTION_ID_MAP[collectionUrlParam]})
    }
  )
})