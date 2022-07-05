import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const goToProduct = () => navigate(`/product/${product.id}`)
  return (
    <li>
      <article className='product_card' onClick={goToProduct}>
          <section className='card_image'>
            <img className='over' src={product.productImgs[1]} alt={`photo of ${product.title}`}/>
            <img src={product.productImgs[2]} alt={`photo of ${product.title}`} />
          </section>
          <section className='card_info'>
            <span className='brand'>{product.title}</span>
              <section className='product__priceContainer'>
                <p className='product__priceTitle'>Price</p>
                <p className='product__price'>$ {product.price}</p>
                <button className='product__button'>
                  <i className='bx bx-cart'></i>
                </button>
              </section>
          </section>
      </article>
    </li>
  )
}

export default ProductCard