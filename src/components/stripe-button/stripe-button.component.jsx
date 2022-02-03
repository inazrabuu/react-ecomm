import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51KP53tH6rsCCxY2UaEhg4D0FLishB09D32JmnX5LLtvLjvpBsA3IMAKfnd2cvzYARAlgLZDkQxzBgB9A8CP4P33P00H3v3Iu3s'

  const onToken = (token) => {
    console.log(token)
    alert(`Payment Success`)
  }

  return(
    <StripeCheckout 
      label="Pay Now"
      name="Ecomm Exp"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      decription={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton