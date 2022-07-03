import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()

    const goToHome = () => navigate('/')

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
                <button className='nav_icon'>
                    <i className='bx bx-cart icon_user'></i>
                </button>
            </nav>
            <div className='cart_modal'></div>
        </div> 
    </div>
    <Outlet/>
    </>
  )
}

export default NavBar