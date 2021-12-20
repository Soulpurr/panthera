import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
    const publishablekey="pk_test_51K6w9HSCCzF8ZYwfSRDDD4DVbzHcAztUecen2zi9N7O4LakCHxHC05rZ6jIgc08QTij6LfzX0Q7RHP57GOjLIPTn00QeaGZ3Ib"
    const ontoken=(token)=>{
        console.log(token)
        alert("Payment Successful")
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='Panthera ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={ontoken}
        stripeKey={publishablekey}

        />
    )
}
export default StripeCheckoutButton