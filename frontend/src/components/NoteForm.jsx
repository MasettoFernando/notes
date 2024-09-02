import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';

const NoteForm = ({ title, setTitle, content, setContent, selectedCategory, setSelectedCategory, isArchived, setIsArchived, onSubmit, buttonText }) => {
  
    const navigate = useNavigate(); 
    return (
    <form onSubmit={onSubmit}>
      <label>
        Title:
        <input
          className='editInput'
          type="text"
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Content:
        <textarea
          className='editInput'
          value={content}
          placeholder='Add your content'
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>

      <CategoryFilter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        placeholder="Select a category"
      />
      
      <label>
        Archive:
        <input
          type="checkbox"
          checked={isArchived}
          onChange={() => setIsArchived(!isArchived)}
        />
      </label>
      <button type="submit">{buttonText}</button>
      <button onClick={() => navigate('/profile')}>Back</button>
    </form>
  );
};

export default NoteForm;
