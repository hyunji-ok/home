import React from 'react';
import carrier1 from '../images/carrier1_1280.jpg'
import carrier2 from '../images/carrier2_1280.jpg'

function Carriers() {
  return (
    <div className="carrier">
        <h2>Carriers</h2>
        <div className="carrier-cards">
            <div className="card">
                <img src={carrier1} alt="carrier 1" />
                <h3>성원애드피아</h3>
            </div>
            <div className="card">
                <img src={carrier2} alt="carrier 2" />
                <h3>플래티어</h3>
            </div>
        </div>
    </div>
  );
}

export default Carriers;