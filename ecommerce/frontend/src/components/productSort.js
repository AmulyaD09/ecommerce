import React, { useState, useEffect } from 'react';

const ProductSort = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    onSort(sortOrder);
  }, [sortOrder, onSort]);

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOrder(selectedSort);
  };

  return (
    <div className="product-sort">
      <label
      style={{
        padding: '4px 4px 4px 4px',
        color:'black',
        fontWeight:'bold',
        margin: '4px',
        marginLeft: '19px',
        fontSize: '18px',
        border: '1px',
        borderRadius: '4px',
      }}
      >Sort By Price:</label>
      <select value={sortOrder} onChange={handleSortChange}
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
        <option value="">Select</option>
        <option value="lowest">Lowest to Highest</option>
        <option value="highest">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default ProductSort;
