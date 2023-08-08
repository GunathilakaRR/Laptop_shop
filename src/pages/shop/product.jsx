import React from 'react'

export const Product=(props)=> {
  const {is, productName, price, productImage} = props.data;
  return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>Rs. {price}</p>
      </div>
      <button className='addToCartBttn'>Add to cart</button>
    </div>
  )
}
