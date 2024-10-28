/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import carrier1 from 'assets/images/carrier1.png'
import carrier2 from 'assets/images/carrier2.png'
import AlertDialog from 'components/common/dialog';

function Carriers() {
  return (
    <div className="carriers" css={carriersStyle}>
        <h2>Carriers</h2>
        <div className="carrier-cards">
            <AlertDialog>
              <div className="card">
                  <img src={carrier1} alt="carrier 1" />
                  <h3>성원애드피아</h3>
              </div>
            </AlertDialog>
            
            <AlertDialog>
              <div className="card">
                  <img src={carrier2} alt="carrier 2" />
                  <h3>플래티어</h3>
              </div>
            </AlertDialog>
        </div>
    </div>
  );
}

const carriersStyle = css`
  .carrier-cards {
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
`;

export default Carriers;