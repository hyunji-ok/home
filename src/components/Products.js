/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import product1 from '../assets/images/product1_1280.jpg'
import product2 from '../assets/images/product2_1280.jpg'
import { Link } from 'react-router-dom';
// import product3 from '../images/product3_1280.jpg'
// import product4 from '../images/product4_1280.jpg'
// import product5 from '../images/product5_1280.jpg'
// import product6 from '../images/product6_1280.jpg'

function Products() {
  return (
    <div className="products" css={productsStyle}>
      <h2>Products</h2>
      <div className="product-cards">
        <Link to={`products/sns`}>
          <div className="card">
            <img src={product1} alt="sns" />
            <h3>SNS</h3>
          </div>
        </Link>
        
        <Link to={`products/personal-homepage`}>
          <div className="card">
            <img src={product2} alt="personal-homepage" />
            <h3>개인 홈페이지</h3>
          </div>
        </Link>
        
        {/* <div className="card">
          <img src={product3} alt="Product 3" />
          <h3>Product 3</h3>
          <p>Description of the product...</p>
        </div>
        <div className="card">
          <img src={product4} alt="Product 4" />
          <h3>Product 4</h3>
          <p>Description of the product...</p>
        </div>
        <div className="card">
          <img src={product5} alt="Product 5" />
          <h3>Product 5</h3>
          <p>Description of the product...</p>
        </div>
        <div className="card">
          <img src={product6} alt="Product 6" />
          <h3>Product 6</h3>
          <p>Description of the product...</p>
        </div> */}
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

const productsStyle = css`
  .product-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card {
    background-color: #f4f4f4;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-width: 250px;
    & img {
      width: 90%;
      aspect-ratio: 2/1;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #1976d2;
  }

`;

export default Products;