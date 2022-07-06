import { Route, Routes } from 'react-router-dom'
import './App.css'
import './components/Login/style/Login.css'
import HomeScreen from './components/Home/HomeScreen'
import NavBar from './components/Home/NavBar'
import LoginScreem from './components/Login/LoginScreem'
import ProductId from './components/ProductId/ProductId'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<NavBar/>}>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/login' element={<LoginScreem />}/>
          <Route path='/product/:id' element={<ProductId/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
