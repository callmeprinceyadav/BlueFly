// CategoryList.js

import React from 'react';
import categories from './categoryData'; // Import category data

const CategoryList = () => {
  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
