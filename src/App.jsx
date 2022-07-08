import { Route, Routes } from 'react-router-dom'
import './App.css'
import './components/Login/style/Login.css'
import HomeScreen from './components/Home/HomeScreen'
import NavBar from './components/Home/NavBar'
import LoginScreem from './components/Login/LoginScreem'
import ProductId from './components/ProductId/ProductId'
import Purchases from './components/Purchases/Purchases'
import SignUp from './components/Login/SignUp'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsCart } from './store/slices/cartProducts.slice'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsCart())
  } , [])

  return (
    <div className="App">
      <Routes>
        <Route element={<NavBar/>}>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/login' element={<LoginScreem />}/>
          <Route path='/product/:id' element={<ProductId/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
