import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductFilter from '../components/productFilter'
import ProductSort from '../components/productSort';
import '../productStyles.css'; 

function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
      };
      const handleSort = (sortOrder) => {
        setSelectedSort(sortOrder);
      };
    
    
    
      let filteredProducts = products;
      if (selectedCategory !== '') {
        filteredProducts = products.filter((product) => product.category === selectedCategory);
      }

      if (selectedSort === 'lowest') {
        filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
      } else if (selectedSort === 'highest') {
        filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
      }
    
    

    return (
        <div>
            <h1>Products</h1>
            <div>
                        <Row>
                        <ProductFilter onFilter={handleCategoryFilter} />
            <ProductSort onSort={handleSort}/>
                        </Row>
                        </div>
            
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row >
                            {filteredProducts.map((product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                            
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    )
}

export default HomeScreen
