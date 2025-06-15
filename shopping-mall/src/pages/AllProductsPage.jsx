import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';

const AllProductsPage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";

    let url = `https://my-json-server.typicode.com/jaydenkim2001/react-Shopping-Mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map( (item) => (
            <Col lg={3} className="mb-3"> 
              <ProductCard item={item}/> 
            </Col>) 
          )}
        </Row>
      </Container>
    </div>
  )
}

export default AllProductsPage