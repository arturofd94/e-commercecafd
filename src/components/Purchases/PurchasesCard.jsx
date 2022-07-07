import React from 'react'
import PurchaseItems from './PurchaseItems'

const PurchasesCard = ({ purchase }) => {

    const dateAndTimeOfPurchase = purchase.createdAt.split('T').join(' ')
    const dateOfPurchase = dateAndTimeOfPurchase

    console.log(purchase.cart.products)
    
  return (
    <div className="purchase_item">
        <div className="header">
        <p>{dateOfPurchase}</p>
        </div>
            <ul className="purchases_list">
                {
                    purchase?.cart.products.map( product => (
                        <PurchaseItems
                        key={product.id}
                        product={product}
                        />
                    ))
                }
            </ul>
    </div>
  )
}

export default PurchasesCard