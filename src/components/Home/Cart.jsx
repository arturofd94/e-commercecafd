import React from 'react'

const Cart = ({cartOpen}) => {

  return (
    <section className={`cart ${cartOpen && 'open'}`}>
        <h2 className='cart__title'>Shopping Cart</h2>
        <section className='cart__products'>
            <h2>GOla</h2>
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