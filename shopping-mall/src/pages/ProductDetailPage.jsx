import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './css/ProductDetailPage.css';


const ProductDetailPage = () => {
  
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
  try {
    //const url = `/api/products/${id}`;
    const url = `https://my-json-server.typicode.com/jaydenkim2001/react-Shopping-Mall/products/${id}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch product");
    const data = await response.json();
    setProduct(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

  useEffect(()=>{
    getProductDetail()
  }, []);
  
  return (
    <Container className="product-detail-container">
      <Row>
        <Col md={6} className="product-image-area">
          <img className="product-detail-img" src={product?.img} alt={product?.title} />
        </Col>

        <Col md={6} className="product-info-area">
          <h4 className="product-title">{product?.title}</h4>
          <h5 className="product-price">₩{product?.price?.toLocaleString()}</h5>
          {product?.choice && <div className="badge-choice">Conscious Choice</div>}

          {/* Dropdown */}
          <div className="size-select-wrapper">
            <label htmlFor="size" className="size-label">Size</label>
            <select id="size" className="size-dropdown">
              {product?.size?.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>


          {/* Add to Cart Button */}
          <button className="add-to-cart-btn">ADD TO CART</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailPage