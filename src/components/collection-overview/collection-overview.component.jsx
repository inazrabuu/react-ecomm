import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector"

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {
        collections.map(({id, ...otherCollectionProps}) => {
          return (<CollectionPreview key={id} {...otherCollectionProps} />)
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)