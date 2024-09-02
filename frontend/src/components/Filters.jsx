import React from 'react';
import CategoryFilter from './CategoryFilter';

function Filters({ selectedCategory, setSelectedCategory, isArchived, setIsArchived }) {
  const handleActiveChange = () => {
    setIsArchived(false); 
  };

  const handleArchivedChange = () => {
    setIsArchived(true); 
  };

  return (
    <div className='filters'>
      <CategoryFilter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        placeholder="All"
      />

      <div className='headerContainer'>
        <label className='filterisArchived'>
          Active
          <input
            type="checkbox"
            checked={!isArchived} 
            onChange={handleActiveChange}
          />
        </label> 
        
        <label className='filterisArchived'>
          Archived
          <input
            type="checkbox"
            checked={isArchived} 
            onChange={handleArchivedChange}
          />
        </label>
      </div>
    </div>
  );
}

export default Filters;
