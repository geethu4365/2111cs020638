import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function ProductDetails({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Company: {product.company}
        </Typography>
        <Typography variant="body1">
          Category: {product.category}
        </Typography>
        <Typography variant="body1">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body1">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body1">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductDetails;