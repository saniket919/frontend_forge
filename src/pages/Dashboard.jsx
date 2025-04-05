import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../components/layout/DashboardLayout';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Welcome, {currentUser.email}</h3>
          <p className="text-gray-600">You are now logged in to your dashboard.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-indigo-800 mb-2">Statistics</h3>
            <p className="text-indigo-600">View your dashboard statistics here.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-green-800 mb-2">Activities</h3>
            <p className="text-green-600">Track your recent activities here.</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-purple-800 mb-2">Reports</h3>
            <p className="text-purple-600">Access your reports and analytics here.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard; 