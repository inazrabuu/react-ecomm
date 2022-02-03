import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectShopCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
  console.log(collection)
  return (
    <div className="category">
      <h2>Category</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
  }
}

export default connect(mapStateToProps)(CollectionPage)