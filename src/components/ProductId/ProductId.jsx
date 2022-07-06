import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {

  const [product, setProduct] = useState()
  const [indexClass, setIndexClass] = useState(0)

  const {id} = useParams()

  const classImg = ['', 'second-img', 'third-img']
  
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [])


  const clickPrev = () => {
    const prevClass = indexClass - 1
    if (prevClass < 0) {
      setIndexClass(classImg.length - 1)
    } else {
      setIndexClass(prevClass)
    }
  }

  const clickNext = () => {
    const nextClass = indexClass + 1
    if (nextClass >= classImg.length) {
      setIndexClass(0)
    } else {
      setIndexClass(nextClass)
    }
  }


  return (
    <div className='product'>
      <div className='slider'>
        <div onClick={clickPrev} className='slider__prev'>&#60;</div>
        <div className={`slider__container ${classImg[indexClass]}`}>
          {
            product?.productImgs.map(imgSrc => (
              <img
              key={imgSrc}
              src={imgSrc}
              alt='product-image'
              className='slider__imgs'
              />
            ))
          }
        </div>
        <div onClick={clickNext} className='slider__next'>&#62;</div>
      <div className="dots_container">
        <div onClick={() => setIndexClass(0)}
         className={indexClass === 0 ? 'dots dots_active' : 'dots'}></div>
        <div onClick={() => setIndexClass(1)}
        className={indexClass === 1 ? 'dots dots_active' : 'dots'}></div>
        <div onClick={() => setIndexClass(2)}
         className={indexClass === 2 ? 'dots dots_active' : 'dots'}></div>
      </div>
      </div>
    </div>
  )
}

export default ProductScreen
