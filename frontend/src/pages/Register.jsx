
import React from 'react';
import useRegister from '../hooks/useRegister';
import AuthFormFields from '../components/AuthFormFields';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Register = () => {

  const navigate = useNavigate();

  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleRegister,
  } = useRegister();

  return (
    <div className='loginRegisterContainer'>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>

        <AuthFormFields
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
        />

        <button type="submit">Register</button>
      </form>
      <h5>
        Already have an account?
      </h5>
      <button onClick={() => navigate('/login')}>Log in here</button>
    </div>
  );
};

export default Register;
