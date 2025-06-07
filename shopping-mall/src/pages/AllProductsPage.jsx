import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
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
      <Container>
        <Row>
          {productList.map( (item) => (
            <Col lg={3}> 
              <ProductCard item={item}/> 
            </Col>) 
          )}
        </Row>
      </Container>
    </div>
  )
}

export default AllProductsPage