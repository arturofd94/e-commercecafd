import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './components/Home/HomeScreen'
import NavBar from './components/Home/NavBar'
import ProductId from './components/ProductId/ProductId'
import Purchases from './components/Purchases/Purchases'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<NavBar/>}>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/product/:id' element={<ProductId/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
