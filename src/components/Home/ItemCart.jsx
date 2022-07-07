import React from 'react'

const ItemCart = ({product}) => {
  return (
    <article className='item'>
        <p className='item__mark'>{product.brand}</p>
        <p className='item__name'>{product.title}</p>
        <p className='item__quantity'>{product.productsInCart.quantity}</p>
        <i className='item__button bx bx-trash'></i>
        <section className='item__results'>
            <p className='item__totalText'>Total</p>
            <p className='item__total'>$ {product.price}</p>
        </section>
    </article>
  )
}

export default ItemCart