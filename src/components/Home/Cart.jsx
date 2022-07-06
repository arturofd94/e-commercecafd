import React, { useEffect, useState } from 'react'
import ItemCart from './ItemCart'
import axios from 'axios'
import getConfig from '../../utils/getConfig.js'

const Cart = ({cartOpen}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    console.log(getConfig())
    axios.get(url, getConfig())
    .then(res => setProducts(res.data.data.cart.products))
    .catch(err => console.log(err))
  })

  return (
    <section className={`cart ${cartOpen && 'open'}`}>
        <h2 className='cart__title'>Shopping Cart</h2>
        <section className='cart__products'>
          {
            products.map(product => <ItemCart product={product}/>)
          }
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