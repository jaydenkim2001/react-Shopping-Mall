import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProductsPage from './pages/AllProductsPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  
  /*
  Since we are not developint the backend, we just assume if the value of 
  authenticated is true, the user has logged in vice versa. 
  */
  const[authenticated, setAuthenticated] = useState(false); 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AllProductsPage/>}/>
        <Route path='/login' element={<LoginPage setAuthenticated={setAuthenticated}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticated={authenticated}/>}/>
      </Routes>
    </div>
  )
}

export default App