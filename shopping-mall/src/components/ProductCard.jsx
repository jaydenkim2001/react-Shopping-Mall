import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
        <img className='product-img' src={item?.img}/>
        <div className='choice-badge'>Conscious Choice</div>
        <div className="product-title">{item?.title}</div>
        <div className="product-price">{item?.price}</div>
        <div className="product-status">New or Old Product</div>
    </div>
  )
}

export default ProductCard