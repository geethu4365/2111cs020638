import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import ProductDetails from '../components/ProductDetails';

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch single product from your API here
    // Example: fetchProduct(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
}

export default SingleProduct;