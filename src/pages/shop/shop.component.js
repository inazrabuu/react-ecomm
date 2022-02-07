import React from "react"
import { Route } from "react-router-dom"
import { createStructuredSelector } from 'reselect'
import { connect } from "react-redux"

import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions"
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector"

import WithSpinner from "../../components/with-spinner/with-spinner.component"

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from "../collection/collection.component"

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props
    fetchCollectionStartAsync()
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props

    return(
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => {return (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)}} />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => {return (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)}} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCollectionStartAsync: () => { dispatch(fetchCollectionStartAsync()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)