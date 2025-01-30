import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/InvoiceAssessment" element={<Login/>} />
        <Route path="/Invoice" element={<PrivateRoute element={<InvoiceForm />} />} />
      </Routes>
    </Router>
  );
};

export default App;
