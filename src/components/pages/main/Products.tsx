/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import product1 from 'assets/images/product1_1280.jpg'
import product2 from 'assets/images/product2_1280.jpg'
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="products" css={productsStyle}>
      <h2>Products</h2>
      <div className="product-cards">
        <Link to={`products/enjoy-my-place`}>
          <div className="card">
            <img src={product2} alt="enjoy-my-place" />
            <h3>ENJOY-MY-PLACE(클릭)</h3>
          </div>
        </Link>

        <Link to={`products/tmb`}>
          <div className="card">
            <img src={product2} alt="tmb" />
            <h3>TMB(클릭)</h3>
          </div>
        </Link>
        
        <Link to={`products/personal-homepage`}>
          <div className="card">
            <img src={product1} alt="personal-homepage" />
            <h3>개인 홈페이지(클릭)</h3>
          </div>
        </Link>

        {/* <Link to={`test/test-page`}>
          <div className="card">
            <img src={product2} alt="test-page" />
            <h3>test-page</h3>
          </div>
        </Link> */}
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