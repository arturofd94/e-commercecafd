import Cart from './Cart'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const navigate = useNavigate()

    const goToHome = () => navigate('/')
    const handleClickCart = () => setCartOpen(!cartOpen)
  return (
    <>
    <div className='navbar'>
       <div className='fixed'>
            <nav className='navbar_nav'>
                <div className='nav_title' onClick={goToHome}><h1>e-commerce</h1></div>
                <button className='nav_icon'>
                    <i className='bx bxs-user icon_user'></i>
                </button>
                <button className='nav_icon'>
                    <i className='bx bx-shopping-bag icon_user'></i>
                </button>
                <button 
                    className='nav_icon'
                    onClick={handleClickCart}
                >
                    <i className='bx bx-cart icon_user'></i>
                </button>
            </nav>
            <div className='cart_modal'></div>
        </div> 
    </div>
    <Cart cartOpen={cartOpen}/>
    <Outlet/>
    </>
  )
}

export default NavBar