import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/InvoiceManagement" element={<PrivateRoute element={<InvoiceForm />} />} />
      </Routes>
    </Router>
  );
};

export default App;
