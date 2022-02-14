import ShopActionTypes from "./shop.types";
import { 
  firestore, 
  convertCollectionSnapshotToMap 
} from "../../firebase/firebase.util";

export const updateCollections = (collectionsMap) => {
  return ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
  })
}

export const fetchCollectionsStart = () => {
  return ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
  })
}

export const fetchCollectionsSuccess = (collectionsMap) => {
  return ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  })
}

export const fetchCollectionsFailure = (errorMessage) => {
  return ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  })
}

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef.get().then(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch((error) => { dispatch(fetchCollectionsFailure(error.message)) })
  }
}