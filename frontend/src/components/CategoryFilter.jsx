import React from 'react';
import useCategories from '../hooks/useCategories';

const CategoryFilter = ({ selectedCategory, setSelectedCategory, placeholder }) => {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <label>
      Category:
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)} 
        required
      >
        <option value="">{placeholder}</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CategoryFilter;
