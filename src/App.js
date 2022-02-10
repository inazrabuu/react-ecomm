import React, { useEffect } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInUp from './pages/sign-in-up/sign-in-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.action'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact 
          path='/signin' 
          render={() => currentUser ? (<Redirect to="/" />) : (<SignInUp />)} 
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => { return dispatch(checkUserSession()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
