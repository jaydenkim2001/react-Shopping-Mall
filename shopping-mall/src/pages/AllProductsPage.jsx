import React, { useEffect } from 'react'

const AllProductsPage = () => {
  const getProducts = async () => {
    let url = `/api/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }
  useEffect(()=>{
    getProducts();
  }, [])
  return (
    <div></div>
  )
}

export default AllProductsPage