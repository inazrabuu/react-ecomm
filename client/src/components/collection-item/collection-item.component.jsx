import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

import { 
  CollectionItemContainer, 
  AddButton, 
  BackgroundImage, 
  CollectionFooterContainer,
  NameContainer,
  PriceContainer } from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item
  return(
    <CollectionItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{ name }</NameContainer>
        <PriceContainer>{ price }</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={ () => { addItem(item)} } inverted>ADD TO CART</AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addItem: (item) => { dispatch(addItem(item)) }
  })
}

export default connect(null, mapDispatchToProps)(CollectionItem)