import React from 'react'
import ItemCart from './ItemCart'

const Cart = ({cartOpen}) => {

  return (
    <section className={`cart ${cartOpen && 'open'}`}>
        <h2 className='cart__title'>Shopping Cart</h2>
        <section className='cart__products'>
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </section>
        <section className='cart__results'>
            <article className='cart__total'>
                <p>Total</p>
                <p>$0</p>
            </article>
            <button className='cart__checkout'>Checkout</button>
        </section>
    </section>
  )
}

export default Cart