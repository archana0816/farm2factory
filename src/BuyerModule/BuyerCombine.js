import React from 'react';
import './BuyerCombine.css'; // Import scoped styles
import Buyernavbar from './Buyernavbar';
import Buyer from './Buyer';
import BuyerFooter from './BuyerFooter';

const BuyerCombine = () => {
  return (
    <div className="buyer-combine-body">
      <div className="buyer-combine-app">
        <Buyernavbar />
        <div className="buyer-combine-container">
          <Buyer />
        </div>
          <BuyerFooter />
      </div>
    </div>
  );
};

export default BuyerCombine;
