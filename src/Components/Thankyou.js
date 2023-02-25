import React from 'react'
import  good from '../assets/images/icon-thank-you.svg'
const Thankyou = () => {
  return (
    <div className='divthankyou' >
        <img src={good}/>
        <h1> Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support,please feel free to email us  at <a href='#'>support@loremgaming.com</a> </p>
      
    </div>
  )
}

export default Thankyou
