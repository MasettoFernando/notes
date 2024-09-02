import { useState, useEffect } from 'react';

const useAuthConfig = () => {
  const [authConfig, setAuthConfig] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthConfig({
      headers: { Authorization: `Bearer ${token}` },
    });
  }, []);

  return authConfig;
};

export default useAuthConfig;
