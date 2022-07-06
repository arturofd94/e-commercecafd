import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PurchasesCard from './PurchasesCard'
import getConfig from '../../utils/getConfig'

const ProductId = () => {

  const [purchases, setPurchases] = useState()

  useEffect (() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    axios.get(URL, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  }, [])


  return (
    <section className='main_container_purchases'>
      <div className="history">
        <Link to="/">Home</Link>
        <div className="separator"></div>
        <p>Purchases</p>
      </div>
      <h1> My purchases </h1>
      {/* Map del endpoint Purchases */}
      <PurchasesCard/>
    </section>
  )
}

export default ProductId