import React, { useEffect, useState } from 'react'
import ItemCart from './ItemCart'
import axios from 'axios'
import getConfig from '../../utils/getConfig.js'
import { useDispatch, useSelector } from 'react-redux'
import { setCartProducts } from '../../store/slices/cartProducts.slice.js'

const Cart = ({cartOpen}) => {
  const cartProducts = useSelector(state => state.cartProducts)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(url, getConfig())
    .then(res => dispatch(setCartProducts(res.data.data.cart.products)))
    .catch(err => console.log(err))
  }, [])

  return (
    <section className={`cart ${cartOpen && 'open'}`}>
        <h2 className='cart__title'>Shopping Cart</h2>
        <section className='cart__products'>
          {
            cartProducts.map(product => <ItemCart key={product.id} product={product}/>)
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