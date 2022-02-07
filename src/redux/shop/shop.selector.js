import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = (state) => { return state.shop }

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => { return shop.collections }
)

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => {
    return collections ? Object.keys(collections).map((key) => { return collections[key] }) : []
  }
)

export const selectShopCollection = memoize((collectionUrlParam) => {
  return createSelector(
    [selectShopCollections],
    (collections) => {
      return collections ? collections[collectionUrlParam] : null
    }
  )
})

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => { return shop.isFethching }
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => { return !!shop.collections }
)