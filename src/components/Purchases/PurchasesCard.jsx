import React from 'react'

const PurchasesCard = () => {
  return (
    <div className="purchase_item">
        <div className="header">
        <p>July 5, 2022</p>
        </div>
            {/* Fecha traida de endpoint */}
            
            <ul className="purchases_list">
                {/* Map Purchases del endpoint */}
                
                <li className='product_item'>
                    <div className="name">2021 Apple iMac</div>
                    <div className='quantity'>
                         <div className='box'>1</div>
                    </div>
                    <div className='price'>$1,500.00</div>
                </li>
                <li className='product_item'>
                    <div className="name">2021 Apple iMac</div>
                    <div className='quantity'>
                        <div className='box'>1</div>
                     </div>
                    <div className='price'>$1,500.00</div>
                </li>
            </ul>
    </div>
  )
}

export default PurchasesCard