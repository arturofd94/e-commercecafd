import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const goToProduct = () => navigate(`/product/${product.id}`)

  return (
    <li>
      <div className='product_card' onClick={goToProduct}>
          <div className='card_image'>
            <img className='over' src={product.productImgs[1]} alt={`photo of ${product.title}`}/>
            <img src={product.productImgs[2]} alt={`photo of ${product.title}`} />
          </div>
          <div className='card_info'>
            <span className='brand'>{product.title}</span>
              <div><p className='price'>Price</p></div>
          </div>
      </div>
    </li>
  )
}

export default ProductCard