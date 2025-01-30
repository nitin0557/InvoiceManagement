import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('userSession');
    navigate('/Invoice'); 
  }, [navigate]);

  return null; 
};

export default Logout;
