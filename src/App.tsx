import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import Logout from './components/Logout';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Invoice" element={<Login/>} />
         <Route path="/logout" element={<Logout/>} />
        <Route path="/invoice" element={<PrivateRoute element={<InvoiceForm />} />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
