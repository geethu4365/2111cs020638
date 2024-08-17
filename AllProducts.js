import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import ProductList from '../components/ProductList';
import FilterSort from '../components/FilterSort';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    // Fetch products from your API here
    // Example: fetchProducts(filters, sortBy).then(setProducts);
  }, [filters, sortBy]);

  return (
    <Container>
      <FilterSort 
        onFilterChange={setFilters} 
        onSortChange={setSortBy}
      />
      <ProductList products={products} />
    </Container>
  );
}

export default AllProducts;