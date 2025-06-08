import React from 'react';
import './ProductCard.css'; 
import { useNavigate } from 'react-router';

const ProductCard = ({item}) => {
  
  // const navigate = useNavigate();
  // const goToProductDetail = () => {
  //   navigate('/product/' + item?.id);
  // }

  return (
    <div className='product-card' onClick={goToProductDetail}>
        <img className='product-img' src={item?.img}/>
        <div className='choice-badge'>{item?.choice == true ? "Conscious Choice" : ""}</div>
        <div className="product-title">{item?.title}</div>
        <div className="product-price">₩{item?.price}</div>
        <div className="product-status">{item?.new == true ? "New Arrival" : ""}</div>
    </div>
  )
}

export default ProductCard