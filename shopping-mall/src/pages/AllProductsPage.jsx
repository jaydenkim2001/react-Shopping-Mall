import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const AllProductsPage = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `/api/products`;
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    setProductList(data);
  }
  useEffect(()=>{
    getProducts();
  }, [])
  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default AllProductsPage