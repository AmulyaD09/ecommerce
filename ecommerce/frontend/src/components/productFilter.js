import React, { useState } from 'react';

const ProductFilter = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilter(category); 
  };

  return (
    <div>
      <label
        style={{
            padding: '4px 4px 4px 4px',
            color:'black',
            fontWeight:'bold',
            margin: '4px',
            marginLeft:'10px',
            fontSize: '18px',
            border: '1px',
            borderRadius: '4px',
          }}>Category:
          </label>
         
      <select value={selectedCategory} 
      onChange={handleCategoryChange}
      style={{
        padding: '4px 4px 4px 4px',
        color:'black',
        fontWeight:'bold',
        margin: '4px',
        fontSize: '16px',
        border: '1px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      
      >
        <option value="">All Categories</option>
        <option value="Speakers and Headsets">Speakers and Headsets</option>
        <option value="Watches">Watches</option>
        <option value="Camera">Camera</option>
        <option value="Mobile Phone">Mobile Phone</option>
        <option value="Gaming">Gaming</option>
      </select>
    </div>

  );
};

export default ProductFilter;

