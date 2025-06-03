import { useState } from 'react'
import { Routes, Route } from 'react-router';
import './App.css'
import AllProductsPage from './pages/AllProductsPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<AllProductsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/product/:id' element={<ProductDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App