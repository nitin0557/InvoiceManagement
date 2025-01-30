import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('userSession');
    navigate('/InvoiceAssessment'); 
  }, [navigate]);

  return null; 
};

export default Logout;
