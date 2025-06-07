import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProductsPage from './pages/AllProductsPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AllProductsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/product/:id' element={<ProductDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App