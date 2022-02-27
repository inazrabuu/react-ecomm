import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { GlobalStyle } from './global.styles'

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.action'

const HomePage = lazy(() => { return import('./pages/homepage/homepage.component') })
const ShopPage = lazy(() => { return import('./pages/shop/shop.component') }) 
const SignInUp = lazy(() => { return import('./pages/sign-in-up/sign-in-up.component') })
const CheckoutPage = lazy(() => { return import('./pages/checkout/checkout.component') })

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => currentUser ? (<Redirect to="/" />) : (<SignInUp />)} 
            />
        </Suspense>
      </Switch>
    </div>
  )
}

export default App;
