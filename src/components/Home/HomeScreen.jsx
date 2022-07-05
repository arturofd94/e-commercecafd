import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/products.slice'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import Form from './Form'
import FilterProducts from './FilterProducts'

const HomeScreen = () => {

  const [searchedProduct, setSearchedProduct] = useState('')
  const [filteredProduct, setFilteredProduct] = useState(null)

  const filter = useRef()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  
  useEffect(() => {
    dispatch(getProducts())
  } , [])
  
  useEffect(() => {
      const arrayFilter = products?.filter(e => e.title.toLowerCase().includes(searchedProduct?.toLowerCase()))
      setFilteredProduct(arrayFilter)
  }, [searchedProduct, products])
  
  const clickButtonFilter = () => {
    filter.current.classList.toggle('open')
  }

  return (
    <div className='content'>
      <FilterProducts filter={filter}/>
      <section className='main_container'>
        <div className='search_box'>
          <Form setSearchedProduct={setSearchedProduct}/>
          <button onClick={clickButtonFilter} className='button__filter'>
            <i className='bx bx-filter-alt' ></i>
          </button>
        </div>
          <ul className='products_list'>
            {
              filteredProduct?.map( product => (
                <ProductCard
                key={product.id}
                product={product}
                />
                ))
            }
          </ul>
      </section>
    </div>
  )
}

export default HomeScreen