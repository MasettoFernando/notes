
import React from 'react';
import useLogin from '../hooks/useLogin';
import AuthFormFields from '../components/AuthFormFields';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {

  const navigate = useNavigate();

  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
  } = useLogin();

  return (
    <div className='loginRegisterContainer'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <AuthFormFields
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
        />
        
        <button type="submit">Login</button>
      </form>
      <h5>
        Don't have an account?
      </h5>
      <button onClick={() => navigate('/register')}>Sign up here</button>
    </div>
  );
};

export default Login;
