import React from 'react'
import ProductDetailPage from '../pages/ProductDetailPage';
import { Navigate } from 'react-router';

const PrivateRoute = ({authenticated}) => {
  return authenticated === true ? <ProductDetailPage/> : <Navigate to="/login"/>
}

export default PrivateRoute