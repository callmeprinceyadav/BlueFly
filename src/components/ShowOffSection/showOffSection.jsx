// ShowoffSection.js

import React from 'react';
import promos from './promoData'; // Import promo data

const ShowoffSection = () => {
  return (
    <div className="Showoff_section">
      {promos.map((promo) => (
        <div key={promo.id} className="showoff">
          <img src={promo.image} alt={promo.alt} />
        </div>
      ))}
    </div>
  );
};

export default ShowoffSection;
