import React from 'react'

const ItemCart = () => {
  return (
    <article className='item'>
        <p className='item__mark'>Samsung</p>
        <p className='item__name'>Samsung Galaxy S22</p>
        <p className='item__quantity'>5</p>
        <i className='item__button bx bx-trash'></i>
        <section className='item__results'>
            <p className='item__totalText'>Total</p>
            <p className='item__total'>$ 4250</p>
        </section>
    </article>
  )
}

export default ItemCart