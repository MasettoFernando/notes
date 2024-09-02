import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please complete all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:3100/api/users/register', { username, password });
      navigate('/login');
    } catch (err) {
      setError('Error registering the user.');
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleRegister,
  };
};

export default useRegister;
