import React from 'react';

const AuthFormFields = ({ username, setUsername, password, setPassword, error }) => {
  return (
    <>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          placeholder="Your username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <h5>{error}</h5>}
    </>
  );
};

export default AuthFormFields;
