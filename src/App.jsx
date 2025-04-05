import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './components/Dashboard';
import SmartSummary from './pages/SmartSummary';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Dashboard Routes */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<SmartSummary />} />
            <Route path="goals" element={<div>Goals Page</div>} />
            <Route path="spotlight" element={<div>Spotlight Page</div>} />
            <Route path="resources" element={<div>Resources Page</div>} />
            <Route path="awards" element={<div>Awards Page</div>} />
            <Route path="community" element={<div>Community Page</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
