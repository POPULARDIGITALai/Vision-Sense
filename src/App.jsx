import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route 
        path="/dashboard/*" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;