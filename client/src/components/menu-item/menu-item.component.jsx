import React from 'react'
import { withRouter } from 'react-router-dom'

import { MenuItemContainer } from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">SHOP NOW</span>
      </div>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)