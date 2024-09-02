import React from 'react';

function Header({ onLogout, onCreateNote }) {
  return (
    <div className='headerContainer'>
      <button onClick={onCreateNote}>New Note</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Header;
