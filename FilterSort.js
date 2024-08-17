import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

function FilterSort({ onFilterChange, onSortChange }) {
  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          onChange={(e) => onFilterChange((prev) => ({ ...prev, category: e.target.value }))}
        >
          {/* Add menu items based on your categories */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Company</InputLabel>
        <Select
          onChange={(e) => onFilterChange((prev) => ({ ...prev, company: e.target.value }))}
        >
          {/* Add menu items based on your companies */}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Min Price"
        type="number"
        onChange={(e) => onFilterChange((prev) => ({ ...prev, minPrice: e.target.value }))}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Max Price"
        type="number"
        onChange={(e) => onFilterChange((prev) => ({ ...prev, maxPrice: e.target.value }))}
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Sort By</InputLabel>
        <Select onChange={(e) => onSortChange(e.target.value)}>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="discount">Discount</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterSort;