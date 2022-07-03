import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/products.slice'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import Form from './Form'

const HomeScreen = () => {

  const [searchedProduct, setSearchedProduct] = useState()
  const [filteredProduct, setFilteredProduct] = useState()

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProducts())
  } , [])

  const products = useSelector(state => state.products)


  useEffect(() => {
    
      setFilteredProduct(products?.filter(e => e.title.includes(searchedProduct?.toLowerCase())))
    

  } , [searchedProduct])

  console.log(filteredProduct)



  return (
    <div className='content'>
      <section className='main_container'>
        <div className='search_box'>
          <Form setSearchedProduct={setSearchedProduct}/>
        </div>
        
            {
              filteredProduct 
              
              ?

              filteredProduct?.map( product => (
          
                <ProductCard
                key={product.id}
                product={product}
                />
                ))

              :
              
               products?.map( product => (
          
                <ProductCard
                key={product.id}
                product={product}
                />
                ))
            }
        
      </section>
    </div>
  )
}

export default HomeScreen