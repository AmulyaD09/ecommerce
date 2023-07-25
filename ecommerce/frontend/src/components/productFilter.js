import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { filterProducts } from '../actions/filterAction';


const ProductFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const dispatch = useDispatch();
  
    const handleCategoryChange = (event) => {
      const category = event.target.value;
      setSelectedCategory(category);
      dispatch(filterProducts(category));
    };
    return (
        <div>
          <h2>Filter Products</h2>
          <label>Category:</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="category1">Electronics</option>
            <option value="category2">Watches</option>
    
          </select>
    
        </div>
      );
    };
    
    export default ProductFilter;  