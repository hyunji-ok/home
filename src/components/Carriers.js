import React from 'react';
import carrier1 from '../assets/images/carrier1.png'
import carrier2 from '../assets/images/carrier2.png'
import AlertDialog from './common/dialog';

function Carriers() {
  return (
    <div className="carrier">
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

export default Carriers;