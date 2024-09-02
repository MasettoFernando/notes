import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please complete all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3100/api/users/login', { username, password });
      localStorage.setItem('token', response.data.token); 
      navigate('/profile');
    } catch (err) {
      setError('Error logging in.');
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
  };
};

export default useLogin;
