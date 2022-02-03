import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = (state) => { return state.shop }

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => { return shop.collections }
)

export const selectShopCollection = memoize((collectionUrlParam) => {
  return createSelector(
    [selectShopCollections],
    (collections) => {
      return collections[collectionUrlParam]
    }
  )
})